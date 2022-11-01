import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __addUsers = createAsyncThunk(
  "users/addUsers",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "http://13.124.216.20:8080/api/signup",
        payload
      );
      console.log(data, "data");
      if (!data.data.result) {
        alert("회원가입에 실패하였습니다.");
      }
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __emailCheck = createAsyncThunk(
  "users/__emailCheck",
  async (payload, thunkAPI) => {
    try {
      const result = await axios.post(
        "http://13.124.216.20:8080/api/id-duplicate",
        payload
      );
      return thunkAPI.fulfillWithValue(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __nameCheck = createAsyncThunk(
  "users/__nameCheck",
  async (payload, thunkAPI) => {
    try {
      const { result } = await axios.post(
        "http://13.124.216.20:8080/api/name-duplicate",
        payload
      );
      if (result) {
        sessionStorage.setItem("overlapName", true);
      } else {
        sessionStorage.setItem("overlapName", false);
      }
      return thunkAPI.fulfillWithValue(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      // const data = await api.post("/api/login", payload);
      const data = await axios.post(
        "http://13.124.216.20:8080/api/login",
        payload
      );
      // if (!data.data.result) {
      //   alert(data.data.data);
      // }
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  overlapEmail: false,
  overlapName: false,
  isLoading: false,
  isLogin: false,
  error: null,
};
export const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    overlapEmailCheck: (state) => {
      state.overlapEmail = false;
    },
    overlapNameCheck: (state) => {
      state.overlapName = false;
    },
    logoutState: (state) => {
      state.isLogin = false;
    },
    loginState: (state) => {
      state.isLogin = true;
    },
  },
  extraReducers: {
    [__addUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__addUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = "데이터를 불러오지 못했습니다.";
    },
    [__loginUser.fulfilled]: (state, action) => {
      if (action.payload.data.result) {
        state.isLoading = false;
        state.isLogin = true;
        sessionStorage.setItem(
          "Access_Token",
          action.payload.headers.accesstoken
        );
        sessionStorage.setItem(
          "Refresh_Token",
          action.payload.headers.refreshtoken
        );
        sessionStorage.setItem("name", action.payload.data.data.name);
        alert(`${action.payload.data.data.name}님 환영합니다.`);
      } else {
        alert("아이디 비밀번호가 일치하지 않습니다");
      }
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      alert("아이디가 존재하지않습니다.");
    },
    [__emailCheck.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload.data.result) {
        state.overlapEmail = true;
      } else {
        state.overlapEmail = false;
      }
    },
    [__emailCheck.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = "데이터를 불러오지 못했습니다.";
    },
    [__nameCheck.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.overlapName = true;
      } else {
        state.overlapName = false;
      }
    },
    [__nameCheck.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = "데이터를 불러오지 못했습니다.";
    },
  },
});

export const { overlapEmailCheck, overlapNameCheck, logoutState, loginState } =
  userSlice.actions;
export default userSlice.reducer;
