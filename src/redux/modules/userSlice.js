import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api";

export const __addUsers = createAsyncThunk(
  "users/addUsers",
  async (payload, thunkAPI) => {
    try {
      const data = await api.post("/api/signup", payload);
      if (!data.data.result) {
        alert("회원가입에 실패하였습니다.");
      }
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      const data = await api.post("/api/login", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  isLoading: false,
  isLogin: false,
  error: null,
};
export const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {},
  extraReducers: {
    [__addUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert(`${action.payload.name}님 회원가입을 축하합니다. 로그인 해주세요.`);
    },
    [__addUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = "데이터를 불러오지 못했습니다.";
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
      // const token = sessionStorage.getItem("Access_Token");
      // sessionStorage.setItem("Access_Token", data.headers.access_token);
      // sessionStorage.setItem("Refresh_Token", data.headers.refresh_token);
      // sessionStorage.setItem("data", data.data.data);
      // alert(`${action.payload.name}님 환영합니다.`);
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      alert("아이디와 비밀번호를 확인해주세요.");
    },
  },
});

export default userSlice.reducer;
