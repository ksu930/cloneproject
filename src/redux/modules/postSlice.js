import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const __getPost = createAsyncThunk(
  "post/getPost",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/api/post").then((res) => res.data.check);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  posts: [],
  post: {},
  isloading: true,
};

export const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
