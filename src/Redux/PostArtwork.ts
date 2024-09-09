/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PostArtwork = createAsyncThunk(
  "post-artwork",
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ASY_A_Token");

      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the Bearer token for authorization
          },
        }
      );
      console.log(response.data);
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
    console.log(data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/auth/login`,
        data
      );

      // Store the access token in localStorage
      if (response.data.access_token) {
        localStorage.setItem("ASY_A_Token", response.data.access_token);
      }

      console.log(response.data);
      return response.data; // Return the response data if the request is successful
    } catch (error: any) {
      // Use rejectWithValue to handle errors
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const initialState = {
  sell_artwork_draft: {},
  post_artwork_draft: {},
  sell_artwork_stage: "stageOne",
  post_artwork_stage: "stageOne",
  data: {},
  status: "idle",
  error: null,
};

export const postArtworkSlice: any = createSlice({
  name: "artwork",
  initialState: initialState,
  reducers: {
    PostArtworkDraft: (state, action) => {
      state.post_artwork_draft = {
        ...state.post_artwork_draft,
        ...action.payload,
      };
    },
    SellArtworkDraft: (state, action) => {
      state.sell_artwork_draft = {
        ...state.sell_artwork_draft,
        ...action.payload,
      };
    },
    PostArtworkStage: (state, action) => {
      state.post_artwork_stage = action.payload;
    },
    SellArtworkStage: (state, action) => {
      state.sell_artwork_stage = action.payload;
    },
    // resetState: () => {
    //   return state.draft == "";
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(PostArtwork.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(PostArtwork.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(PostArtwork.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(LoginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as any;
      });
  },
});

// Action creators are generated for each case reducer function
export const { PostArtworkDraft, SellArtworkDraft, PostArtworkStage, SellArtworkStage } =
  postArtworkSlice.actions;

export default postArtworkSlice.reducer;
