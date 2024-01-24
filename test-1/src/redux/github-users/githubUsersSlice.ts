import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IGithubUsersState } from "./types";
import { githubUserConvertor } from "./converter";

const initialState: IGithubUsersState = {
  users: null,
  isLoading: false,
  error: "",
};

export const githubUsersSlice = createSlice({
  name: "githubUsers",
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = null;
      state.isLoading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.items.map((user: any) =>
          githubUserConvertor(user)
        );
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = "";
        state.users = [];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.users = [];
        state.error = action.payload as string;
      });
  },
});

export const fetchUsers = createAsyncThunk(
  "githubUsers/fetchUsers",
  async (searchString: string, thunkAPI) => {
    const endpoint = `https://api.github.com/search/users?q=${encodeURIComponent(
      searchString
    )}&per_page=100`;

    try {
      const response = await fetch(endpoint, {
        signal: thunkAPI.signal,
      });

      if (!response.ok) {
        const error = await response.json();
        return thunkAPI.rejectWithValue(
          error.message || "Something went wrong"
        );
      }

      return await response.json();
    } catch (e: Error | any) {
      return thunkAPI.rejectWithValue(e.message || "Something went wrong");
    }
  }
);

export const { clearUsers } = githubUsersSlice.actions;
export default githubUsersSlice.reducer;
