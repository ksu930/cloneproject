import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos: [],
    isLoading: false,
    error: null,
  };
export const userSlice = createSlice({
    name: "USER",
    initialState,
    reducers: {},
    extraReducers: {}
})

export default userSlice.reducer;