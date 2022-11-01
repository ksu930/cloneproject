import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

//전체 게시글 조회
export const __getPost = createAsyncThunk(
  "post/getPost",
  async (_, thunkAPI) => {
    try {
      const {data} = await api.get("post").then(res=>res.data)
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//게시글 작성
export const __postFeed = createAsyncThunk("CREATE_POST", async(payload, thunkAPI) => {
  try {
      const res = await api.post("post", payload, {
          headers: {
              'Content-Type': 'multipart/form-data',
          }
      })
      return thunkAPI.fulfillWithValue(res);
  } catch(err) {
      return err;
  }
});
//좋아요
export const __likePost = createAsyncThunk("LIKE_POST", async(payload, thunkAPI) => {
  try {
      const {data} = await api.post(`post/${payload}/like`).then(res=>res.data)
      return thunkAPI.fulfillWithValue({data, payload});
  } catch(err) {
      return err;
  }
})
//게시글 상세 페이지 조회
export const __getDetailPost = createAsyncThunk("GET_DETAIL_POST", async(postId, thunkAPI) => {
  try {
      const res = await api.get(`post/${postId}`);
      return thunkAPI.fulfillWithValue(res.data);
  } catch(err) {
      return thunkAPI.rejectWithValue(err);
  }
});
//댓글 등록
export const __postComment = createAsyncThunk("POST_COMMENT", async(payload, thunkAPI) => {
  try {
      const res = await api.post(`post/${payload.id}/comment`, payload.content)
      return thunkAPI.fulfillWithValue(res.data.data);
  } catch(err) {
      return err;
  }
});

const initialState = {
    posts: [],
    post: {},
    isSuccess: false,
  };

export const userSlice = createSlice({
    name: "USER",
    initialState,
    reducers: {},
    extraReducers: {
      //전체 게시글 조회
      [__getPost.fulfilled]: (state, action) => {
        state.posts = action.payload;
      },
      [__getPost.rejected]: (state, action) => {
      },
      //게시글 작성
      [__postFeed.fulfilled]: (state, action) => {
          state.posts = [...state.posts, action.payload.data];
          state.isSuccess = action.payload.result;
      },
      [__postFeed.rejected]: (state, action) => {
          state.isSuccess = action.payload.result;
      },
      //좋아요
      [__likePost.fulfilled]: (state, action) => {
        if(action.payload.code === "ERR_BAD_REQUEST"){
            alert("로그인이 필요합니다. 로그인해주세요.");
            return;
        } else{
            const index = state.posts.findIndex(post => post.postId === action.payload.payload)
            const new_post = {...state.posts[index], correctLike: action.payload.data.correctLike, likeNum: action.payload.data.likeNum}
            state.posts.splice(index, 1, new_post);
        }
      },
      [__likePost.rejected]: (state, action) => {
      },
      //상세 페이지 조회
      [__getDetailPost.fulfilled]: (state, action) => {
        state.post = action.payload.data;
        state.post.comments = state.post.comments.reverse();
      },
      [__getDetailPost.rejected]: (state, action) => {
      },
      // 댓글 작성
      [__postComment.fulfilled]: (state, action) => {
        state.post.comments = action.payload
        state.post.comments = state.post.comments.reverse();
        alert("댓글등록이 완료되었습니다.")
    },
    [__postComment.rejected]: (state, action) => {
    },
    }
})

export default userSlice.reducer;