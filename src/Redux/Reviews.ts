/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetReviews = createAsyncThunk(
  "get_reviews",
  async (data: { movie_id: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BOOMER_TEST_API}/reviews`, {
        params: {
          movie_id: data.movie_id,
        },
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const AddReview = createAsyncThunk(
  "add_review",
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("boomer_token");

      const response = await axios.put(
        `${import.meta.env.VITE_BOOMER_TEST_API}/reviews`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const UpdateReview = createAsyncThunk(
  "update_review",
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("boomer_token");

      const response = await axios.put(
        `${import.meta.env.VITE_BOOMER_TEST_API}/reviews/update`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const DeleteReview = createAsyncThunk(
  "delete_review",
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("boomer_token");

      const response = await axios.put(
        `${import.meta.env.VITE_BOOMER_TEST_API}/reviews/delete`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  reviews: [],
  data: {},
  status: "idle",
  error: null,
};

export const ReviewSlice: any = createSlice({
  name: "review",
  initialState: initialState,
  reducers: {
    // Movie: (state, action) => {
    //   state.movies = action.payload;
    // },
    // resetState: () => {
    //   return state.draft == "";
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(GetReviews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetReviews.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.reviews = action.payload;
      })
      .addCase(GetReviews.rejected, (state, action: any) => {
        state.status = "failed";
        state.reviews = [];
        state.error = action.payload;
      })
      .addCase(AddReview.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddReview.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(AddReview.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(UpdateReview.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateReview.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(UpdateReview.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(DeleteReview.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(DeleteReview.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(DeleteReview.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = postMovieSlice.actions;

export default ReviewSlice.reducer;
