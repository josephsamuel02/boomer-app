/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UserSignup = createAsyncThunk(
  "register-user",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BOOMER_TEST_API}/auth/signup`,
        data
      );
      // console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(rejectWithValue);
      console.log(error);
      return error.response.data;
    }
  }
);

export const LoginUser = createAsyncThunk(
  "login-user",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BOOMER_TEST_API}/auth/login`,
        data
      );

      if (response.data.token) {
        localStorage.setItem("boomer_token", response.data.token);
      }

      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const GetMyProfile = createAsyncThunk("my_profile", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("boomer_token");

    const response = await axios.get(
      `${import.meta.env.VITE_BOOMER_TEST_API}/users/my_profile`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

export const UpdateMyProfile = createAsyncThunk(
  "update_my_profile",
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("boomer_token");

      const response = await axios.put(
        `${import.meta.env.VITE_BOOMER_TEST_API}/users/update_user`,
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const Logout = createAsyncThunk(
  "logout-user",
  async (data: object, { rejectWithValue }) => {
    const token = localStorage.getItem("G_A_token");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BOOMER_TEST_API}/users/logout-user`,
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const SendCode = createAsyncThunk(
  "send-code",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BOOMER_TEST_API}/users/send-code`,
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const VerifyPhone = createAsyncThunk(
  "verify-phone",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BOOMER_TEST_API}/users/verify-phone`,
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const initialState = {
  auth: {},
  myProfile: {},
  status: "idle",
  error: null,
};

export const authSlice: any = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    clearState: () => {
      // This will reset all properties to their initial values
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(UserSignup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UserSignup.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.auth = action.payload;
      })
      .addCase(UserSignup.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(LoginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.auth = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as any;
      })
      .addCase(GetMyProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetMyProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.myProfile = action.payload;
      })
      .addCase(GetMyProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as any;
      })
      .addCase(UpdateMyProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateMyProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.myProfile = action.payload;
      })
      .addCase(UpdateMyProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as any;
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
