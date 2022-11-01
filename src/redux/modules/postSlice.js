import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

//인기 게시글 조회
export const __bestWrite = createAsyncThunk(
  "GET_BEST_WRITE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.get("best");
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//전체 게시글 조회
export const __getPost = createAsyncThunk(
  "post/getPost",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("post").then((res) => res.data);

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//게시글 작성
export const __postFeed = createAsyncThunk(
  "CREATE_POST",
  async (payload, thunkAPI) => {
    try {
      const res = await api.post("post", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return thunkAPI.fulfillWithValue(res);
    } catch (err) {
      return err;
    }
  }
);
//게시글 삭제
export const __deletePost = createAsyncThunk(
  "DELETE_POST",
  async (postId, thunkAPI) => {
    try {
      await api.delete(`post/${postId}`);
      return thunkAPI.fulfillWithValue({ postId });
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
//게시글 수정
export const __editPost = createAsyncThunk(
  "UPDATE_POST",
  async (payload, thunkAPI) => {
    try {
      const res = await api.put(`post/${payload.id}`, payload.editedPost, {});
      return thunkAPI.fulfillWithValue(res.data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
//좋아요
export const __likePost = createAsyncThunk(
  "LIKE_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api
        .post(`post/${payload}/like`)
        .then((res) => res.data);
      return thunkAPI.fulfillWithValue({ data, payload });
    } catch (err) {
      return err;
    }
  }
);
//게시글 상세 페이지 조회
export const __getDetailPost = createAsyncThunk(
  "GET_DETAIL_POST",
  async (postId, thunkAPI) => {
    try {
      const res = await api.get(`post/${postId}`);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
//댓글 등록
export const __postComment = createAsyncThunk(
  "POST_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const res = await api.post(`post/${payload.id}/comment`, payload.content);
      return thunkAPI.fulfillWithValue(res.data.data);
    } catch (err) {
      return err;
    }
  }
);
//댓글 삭제
export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      await api.delete(`post/${payload.postId}/comment/${payload.id}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return err;
    }
  }
);

const initialState = {
  posts: [],
  post: {},
  isSuccess: false,
};

export const postSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    isSuccessFalse: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
    //인기 게시글 조회
    [__bestWrite.fulfilled]: (state, action) => {
      state.best = action.payload;
    },
    [__bestWrite.rejected]: (state, action) => {},
    //전체 게시글 조회
    [__getPost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [__getPost.rejected]: (state, action) => {},
    //게시글 작성
    [__postFeed.fulfilled]: (state, action) => {
      state.posts = [...state.posts, action.payload.data.data];
      state.post = action.payload.data.data;
      state.isSuccess = action.payload.data.result;
    },
    [__postFeed.rejected]: (state, action) => {
      state.isSuccess = action.payload.result;
    },
    //게시글 삭제
    [__deletePost.fulfilled]: (state, action) => {},
    [__deletePost.rejected]: (state, action) => {},
    //게시글 수정
    [__editPost.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [__editPost.rejected]: (state, action) => {},
    //좋아요
    [__likePost.fulfilled]: (state, action) => {
      if (action.payload.code === "ERR_BAD_REQUEST") {
        alert("로그인이 필요합니다. 로그인해주세요.");
        return;
      } else {
        const index = state.posts.findIndex(
          (post) => post.postId === action.payload.payload
        );
        const new_post = {
          ...state.posts[index],
          correctLike: action.payload.data.correctLike,
          likeNum: action.payload.data.likeNum,
        };
        state.post = {
          ...state.post,
          correctLike: action.payload.data.correctLike,
          likeNum: action.payload.data.likeNum,
        };
        state.posts.splice(index, 1, new_post);
      }
    },
    [__likePost.rejected]: (state, action) => {},
    //상세 페이지 조회
    [__getDetailPost.fulfilled]: (state, action) => {
      state.post = action.payload.data;
      state.post.comments = state.post.comments.reverse();
    },
    [__getDetailPost.rejected]: (state, action) => {},
    // 댓글 작성
    [__postComment.fulfilled]: (state, action) => {
      state.post.comments = action.payload;
      state.post.comments = state.post.comments.reverse();
    },
    [__postComment.rejected]: (state, action) => {},
    //댓글 삭제
    [__deleteComment.fulfilled]: (state, action) => {
      const idx = state.post.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.post.comments.splice(idx, 1);
    },
    [__deleteComment.rejected]: (state, action) => {},
  },
});
export const { isSuccessFalse } = postSlice.actions;
export default postSlice.reducer;
