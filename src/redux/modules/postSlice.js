import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: {},
    isloading:true,
  };

export const userSlice = createSlice({
    name: "USER",
    initialState,
    reducers: {},
    extraReducers: {}
})

export default userSlice.reducer;