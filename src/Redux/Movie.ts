/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UploadMovie = createAsyncThunk(
  "upload-movie",
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("boomer_token");

      const response = await axios.post(
        `${import.meta.env.VITE_BOOMER_TEST_API}/movies`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the Bearer token for authorization
          },
        }
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const GetMovies = createAsyncThunk("get_movies", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("boomer_token");

    const response = await axios.get(`${import.meta.env.VITE_BOOMER_TEST_API}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the Bearer token for authorization
      },
    });

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const GetMovieById = createAsyncThunk(
  "get_movies_by_id",
  async (data: { movie_id: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BOOMER_TEST_API}/movies/by_id`,
        {
          params: {
            movie_id: data.movie_id,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const GetMoviesByGenre = createAsyncThunk(
  "get_movies_by_genre",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BOOMER_TEST_API}/movies/genre`,
        data
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const GetMoviesByType = createAsyncThunk(
  "get_movies_by_type",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BOOMER_TEST_API}/movies/type`, {
        params: {
          type: data.type,
        },
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const SearchMoviesByTitle = createAsyncThunk(
  "search_movies_by_title",
  async (data: { movie_title: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BOOMER_TEST_API}/movies/search`,
        {
          params: {
            movie_title: data.movie_title,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const GetTrendingMovies = createAsyncThunk(
  "get_trending_movies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BOOMER_TEST_API}/movies/trending`
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const UpdateMovie = createAsyncThunk(
  "update_movies",
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("boomer_token");

      const response = await axios.put(
        `${import.meta.env.VITE_BOOMER_TEST_API}/movies/update`,
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

export const AddDownloadLink = createAsyncThunk(
  "add_download_link",
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("boomer_token");

      const response = await axios.put(
        `${import.meta.env.VITE_BOOMER_TEST_API}/movies/add_download_link`,
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

export const RateDownloadLink = createAsyncThunk(
  "rate_download_link",
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("boomer_token");

      const response = await axios.put(
        `${import.meta.env.VITE_BOOMER_TEST_API}/movies/rate_download_link`,
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
  movies: [],
  movie_by_genre: [],
  recommended: [],
  new_series: [],
  movie_type: [],
  trending: [],
  movie: {},
  data: {},
  status: "idle",
  error: null,
};

export const MovieSlice: any = createSlice({
  name: "movie",
  initialState: initialState,

  reducers: {
    // Movie: (state, action) => {
    //   state.movies = action.payload;
    // },

    clearMovieUploadState: (state) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UploadMovie.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UploadMovie.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(UploadMovie.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(GetMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetMovies.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(GetMovies.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(GetMovieById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetMovieById.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.movie = action.payload;
      })
      .addCase(GetMovieById.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(SearchMoviesByTitle.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(SearchMoviesByTitle.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(SearchMoviesByTitle.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(GetMoviesByType.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetMoviesByType.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.movie_type = action.payload;
      })
      .addCase(GetMoviesByType.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(GetTrendingMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetTrendingMovies.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.trending = action.payload;
      })
      .addCase(GetTrendingMovies.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(GetMoviesByGenre.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetMoviesByGenre.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.movie_by_genre = action.payload;
      })
      .addCase(GetMoviesByGenre.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(UpdateMovie.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateMovie.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.movie = action.payload;
      })
      .addCase(UpdateMovie.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(AddDownloadLink.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddDownloadLink.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(AddDownloadLink.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(RateDownloadLink.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(RateDownloadLink.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(RateDownloadLink.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearMovieUploadState } = MovieSlice.actions;

export default MovieSlice.reducer;
