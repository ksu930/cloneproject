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
      if (!data.data.result) {
        alert("회원가입에 실패하였습니다.");
      }
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __emailCheck = createAsyncThunk(
//   "users/__emailCheck",
//   async (payload, thunkAPI) => {
//     try {
//       const { result } = await axios.post("/api/id-duplicate", payload);
//       if (result) {
//         alert("사용가능한 이메일입니다.");
//       } else {
//         alert("이미 존재하는 이메일입니다.");
//       }
//       return thunkAPI.fulfillWithValue(result);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __nameCheck = createAsyncThunk(
//   "users/__nameCheck",
//   async (payload, thunkAPI) => {
//     try {
//       const { result } = await axios.post("/api/id-duplicate", payload);
//       if (result) {
//         sessionStorage.setItem("overlapName", true);
//         alert("사용가능한 닉네임입니다.");
//       } else {
//         sessionStorage.setItem("overlapName", false);
//         alert("이미 존재하는 닉네임입니다.");
//       }
//       return thunkAPI.fulfillWithValue(result);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "http://13.124.216.20:8080/api/login",
        payload
      );
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
      sessionStorage.setItem(
        "Access_Token",
        action.payload.headers.access_token
      );
      sessionStorage.setItem(
        "Refresh_Token",
        action.payload.headers.refresh_token
      );
      // sessionStorage.setItem("data", data.data.data);
      // alert(`${action.payload.name}님 환영합니다.`);
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      alert("아이디와 비밀번호를 확인해주세요.");
    },
    // [__emailCheck.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   if (action.payload) {
    //     state.overlapEmail = true;
    //   } else {
    //     state.overlapEmail = false;
    //   }
    // },
    // [__emailCheck.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.message = "데이터를 불러오지 못했습니다.";
    // },
    // [__nameCheck.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   if (action.payload) {
    //     state.overlapName = true;
    //   } else {
    //     state.overlapName = false;
    //   }
    // },
    // [__nameCheck.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.message = "데이터를 불러오지 못했습니다.";
    // },
  },
});

export default userSlice.reducer;
