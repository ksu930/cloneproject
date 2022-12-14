import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import CommunityLayout from "../components/community/CommunityLayout";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import {
  __getDetailPost,
  __getPost,
  __likePost,
} from "../redux/modules/postSlice";
import { allPosts, ReadData } from "../store/store";

const CommunityPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  // const {posts} = useSelector(state => state.post);
  const { isLogin } = useSelector((state) => state.user);
  const [page, setPage] = useState(0);

  // useEffect(() => {
  //     // dispatch(__getPost(page));
  //     ReadData(page)
  // }, [page]);

  const onClickLikeHandler = (id) => {
    dispatch(__likePost(id));
  };

  const onClickDetailHandler = (id) => {
    dispatch(__getDetailPost(id));
    navigate(`/detail/${id}`);
  };

  const onClickNextPageHandler = () => {
    setPage(page + 1);
    queryClient.invalidateQueries(["posts"]);
  };
  console.log(page);
  const onClickPrevPageHandler = () => {
    setPage(page - 1);
  };

  //   useEffect(() => {
  //     queryClient.invalidateQueries(["posts"]);
  //   }, [page]);
  //recoil
  const [posts, setPosts] = useRecoilState(allPosts);

  //danstackQuery
  const { isLoading, isError, isSuccess } = useQuery(
    ["posts"],
    () => ReadData(page),
    {
      refetchOnWindowFocus: false,
      onSuccess: (temp) => {
        setPosts(temp.data.data);
      },
      onError: (temp) => {
        console.log("error", temp);
      },
    }
  );

  return (
    <Layout>
      <CommunityLayout>
        <StContent>
          <div className="sub-header">
            <div className="sub-header-info">
              <div className="sub-header__title">
                <div>전체</div>
              </div>
              <ul className="sub-header-button">
                <li className="sub-header-button__item">
                  <div
                    onClick={() => {
                      isLogin ? navigate("/write") : navigate("/login");
                    }}
                    className="write-link"
                  >
                    <img
                      src="https://talk.op.gg/images/icon-write@2x.png"
                      alt="글쓰기"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="sub-link">
              <ul className="sub-link__list">
                <li className="sub-link__item_first">
                  <div>
                    <img
                      src="https://talk.op.gg/images/icon-hot@2x.png"
                      alt=""
                    />
                    <span>인기</span>
                  </div>
                </li>
                <li className="sub-link__item--active">
                  <div>
                    <img
                      src="https://talk.op.gg/images/icon-new-on@2x.png"
                      alt=""
                    />
                    <span>최신</span>
                  </div>
                </li>
                <li className="sub-link__item">
                  <div>
                    <img
                      src="https://talk.op.gg/images/icon-top@2x.png"
                      alt=""
                    />
                    <span>TOP</span>
                  </div>
                  <div className="container">
                    <button className="active">전체</button>
                  </div>
                </li>
                <li className="sub-link__item">
                  <div>
                    <img
                      src="https://talk.op.gg/images/icon-boost@2x.png"
                      alt=""
                    />
                    <span>10추</span>
                  </div>
                </li>
              </ul>
              <div className="sub-header-search">
                <form>
                  <label>
                    <select name="target" className="sub-header-search__select">
                      <option value="title">제목</option>
                      <option value="user_name">작성자</option>
                    </select>
                  </label>
                  <input
                    type="text"
                    name="q"
                    className="sub-header-search__input"
                    placeholder="검색"
                  />
                  <button className="sub-header-search__button">
                    <img
                      src="https://talk.op.gg/images/icon-search@2x.png"
                      alt=""
                    ></img>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <section className="article-list">
            {posts?.map((post) => (
              <article className="article-list-item" key={post.postId}>
                <div className="article-list-item__vote">
                  {isLogin ? (
                    post.correctLike ? (
                      <img
                        src="https://talk.op.gg/images/icon_vote_up_on.png"
                        alt=""
                        onClick={() => onClickLikeHandler(post.postId)}
                      />
                    ) : (
                      <img
                        src="https://talk.op.gg/images/icon-vote-up.png"
                        alt=""
                        onClick={() => onClickLikeHandler(post.postId)}
                      />
                    )
                  ) : (
                    <img
                      src="https://talk.op.gg/images/icon-vote-up.png"
                      alt=""
                      onClick={() => navigate("/login")}
                    />
                  )}
                  <div>{post.likeNum}</div>
                </div>
                <div
                  className="article-list-item__content"
                  onClick={() => onClickDetailHandler(post.postId)}
                >
                  <div className="article-list-item__title">
                    <span className="post-title">{post.title}</span>
                  </div>
                  <div className="article-list-item-meta">
                    <div className="article-list-item-meta__item_first">
                      자유
                    </div>
                    <div className="article-list-item-meta__item_time">
                      <span>{post.time}</span>
                    </div>
                    <div className="article-list-item-meta__item_img">
                      <img
                        src="//talk.op.gg/images/tier/icon-level-1.png"
                        alt=""
                      />
                    </div>
                    <div className="article-list-item-meta__item_name">
                      {post.name}
                    </div>
                  </div>
                </div>
                <div
                  className="article-list-item-thumbnail"
                  onClick={() => onClickDetailHandler(post.postId)}
                >
                  <img
                    className="article-list-item__thumbnail"
                    src={`${post.image || post.img}`}
                    alt=""
                  />
                </div>
              </article>
            ))}
          </section>

          <div className="article-list-paging-content">
            <div className="article-list-paging-list">
              {page !== 0 ? (
                <button
                  className="prev-page"
                  onClick={() => onClickPrevPageHandler()}
                >
                  <img
                    src="https://talk.op.gg/images/icon-arrow-left@2x.png"
                    alt=""
                  />
                  <span>이전</span>
                </button>
              ) : null}

              {posts?.length < 5 ? null : (
                <button
                  className="next-page"
                  onClick={() => onClickNextPageHandler()}
                >
                  <span>다음</span>
                  <img
                    src="https://talk.op.gg/images/icon-arrow-right@2x.png"
                    alt=""
                  />
                </button>
              )}
            </div>
          </div>
        </StContent>
      </CommunityLayout>
      <Footer />
    </Layout>
  );
};
export default CommunityPage;

const StContent = styled.div`
  margin-top: -40px;
  float: right;
  box-sizing: border-box;
  width: 728px;
  .sub-header {
    position: relative;
    margin-bottom: 8px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
  }
  .sub-header-info {
    z-index: 1000;
    padding-top: 18px;
    padding-bottom: 17px;
  }
  .sub-header__title {
    padding-left: 16px;
    line-height: 21px;
    font-size: 18px;
    color: #1e2022;
    font-weight: 700;
    div {
      color: inherit;
      cursor: pointer;
    }
  }
  .sub-header-button {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 16px;
    margin-right: 16px;
    list-style: none;
  }
  .sub-header-button__item {
    display: inline-block;
    margin-left: 16px;
    vertical-align: top;
  }
  .write-link {
    display: block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    img {
      vertical-align: middle;
      width: 24px;
    }
  }
  .sub-link {
    max-height: 48px;
  }
  .sub-link__list {
    padding: 0 16px;
    white-space: nowrap;
    list-style: none;
    img {
      margin-right: 4px;
      vertical-align: middle;
      width: 24px;
    }
  }
  .sub-link__item--active {
    margin-left: 16px;
    color: #16ae81;
    display: inline-block;
    line-height: 17px;
    font-size: 14px;
    div {
      display: inline-block;
      padding: 10px 2px 14px;
      vertical-align: middle;
      color: inherit;
      cursor: pointer;
    }
    img {
      margin-right: 4px;
      vertical-align: middle;
      width: 24px;
    }
  }
  .sub-link__item_first {
    display: inline-block;
    margin-left: 0;
    line-height: 17px;
    font-size: 14px;
    color: #7b858e;
    div {
      display: inline-block;
      padding: 10px 2px 14px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .sub-link__item {
    margin-left: 16px;
    display: inline-block;
    line-height: 17px;
    font-size: 14px;
    color: #7b858e;
    div {
      display: inline-block;
      padding: 10px 2px 14px;
      vertical-align: middle;
      color: inherit;
      cursor: pointer;
    }
    .container {
      display: inline-block;
      position: relative;
      margin-top: -2px;
      vertical-align: middle;
      button {
        padding-right: 8px;
        padding-left: 8px;
        background: #efefef;
        min-width: 24px;
        height: 24px;
        border-radius: 12px;
        font-size: 12px;
        color: #7b858e;
        cursor: pointer;
        border: 0px;
      }
    }
  }
  .sub-header-search {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 6px;
    margin-bottom: 6px;
  }
  .sub-header-search__select {
    float: left;
    width: 82px;
    padding: 9px 0 8px 15px;
    box-sizing: border-box;
    border: 1px solid #ebeef1;
    border-radius: 4px 0 0 4px;
    line-height: 17px;
    font-size: 14px;
    color: #98a0a7;
    background: url("https://talk.op.gg/images/icon-dropdown-down@2x.png?53a59ffc060ec3c4ef848ca47e37255f");
    background-size: 24px;
    background-position: top 5px right 5px;
    background-repeat: no-repeat;
    appearance: none;
    outline: none;
    margin-top: 20px;
    option {
      font-weight: normal;
      display: block;
      white-space: nowrap;
      min-height: 1.2em;
      padding: 0px 2px 1px;
    }
  }
  .sub-header-search__input {
    float: left;
    border: none;
    width: 200px;
    box-sizing: border-box;
    padding: 10px 32px 9px 16px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #ebeef1;
    line-height: 17px;
    font-size: 14px;
    margin: 0;
    outline: 0;
    margin-top: 20px;
  }
  .sub-header-search__button {
    float: left;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 6px;
    margin-right: 8px;
    background: none;
    cursor: pointer;
    font-family: inherit;
    border: 0;
    padding: 0;
    margin: 0;
    font-size: 14px;
    outline: 0;
    img {
      vertical-align: middle;
      width: 24px;
      margin-top: 27px;
      margin-right: 10px;
    }
  }
  .article-list {
    margin-top: 0;
    border-top: 1px solid #ebeef1;
    background: #f8f9fa;
    line-height: 18px;
    font-size: 14px;
    color: #7b858e;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
  }
  .article-list-item {
    border-top: none;
    min-height: 100px;
    position: relative;
    display: table;
    table-layout: fixed;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    padding: 8px 0;
  }
  .article-list-item__vote {
    width: 72px;
    vertical-align: middle;
    display: table-cell;
    text-align: center;
    div {
      margin-top: 10px;
      line-height: 17px;
      font-size: 14px;
      color: #7b858e;
    }
    img {
      cursor: pointer;
    }
  }
  .article-list-item__content {
    vertical-align: middle;
    display: table-cell;
    cursor: pointer;
  }
  .article-list-item__title {
    margin-bottom: 10px;
    display: flex;
    overflow: auto;
    vertical-align: top;
    line-height: 15px;
    font-size: 14px;
    color: #1e2022;
    word-break: break-all;
  }
  .post-title {
    display: block;
    max-width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 5px;
  }
  .article-list-item-thumbnail {
    width: 93px;
    padding: 0 24px 0 8px;
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;
  }
  .article-list-item__thumbnail {
    width: 93px;
    height: 83px;
    display: block;
    object-fit: cover;
    font-family: "object-fit: cover;";
  }
  .article-list-item-meta {
    display: block;
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      padding-bottom: 3px;
    }
  }
  .article-list-item-meta__item_first {
    padding-left: 0;
    display: inline-block;
    line-height: 18px;
    font-size: 14px;
    color: #98a0a7;
    padding-top: 0px;
    height: 16px;
  }
  .article-list-item-meta__item_time {
    display: inline-block;
    line-height: 18px;
    font-size: 14px;
    color: #98a0a7;
    padding: 0 20px 0 20px;
    margin-left: 20px;
    border-left: 1px #d9dbdd solid;
    border-right: 1px #d9dbdd solid;
    height: 16px;
  }
  .article-list-item-meta__item_img {
    padding-left: 0;
    display: inline-block;
    line-height: 18px;
    font-size: 14px;
    color: #98a0a7;
    padding-left: 20px;
    padding-top: 0px;
    height: 16px;
  }
  .article-list-item-meta__item_name {
    padding-left: 0;
    display: inline-block;
    line-height: 18px;
    font-size: 14px;
    color: #98a0a7;
    padding-top: 0px;
    height: 16px;
  }
  .article-list-paging-content {
    border-top: 1px solid #ebeef1;
    display: table;
    width: 696px;
    background: #f8f9fa;
    line-height: 18px;
    font-size: 14px;
    color: #7b858e;
    text-align: center;
    padding: 12px 16px;
  }
  .article-list-paging-list {
    margin-left: 0;
    float: none;
    vertical-align: middle;
    .prev-page {
      width: 77px;
      height: 40px;
      box-sizing: border-box;
      text-align: center;
      font-size: 14px;
      color: #7b858e;
      padding: 8px 16px 7px 7px;
      border-radius: 4px;
      background-color: #fff;
      border: 1px solid #dddfe4;
      cursor: pointer;
      margin-right: 10px;
      img {
        vertical-align: middle;
        width: 24px;
      }
    }
    .next-page {
      width: 77px;
      height: 40px;
      box-sizing: border-box;
      text-align: center;
      font-size: 14px;
      color: #7b858e;
      padding: 8px 7px 7px 16px;
      border-radius: 4px;
      background-color: #fff;
      border: 1px solid #dddfe4;
      cursor: pointer;
      margin: 0;
      img {
        vertical-align: middle;
        width: 24px;
      }
    }
  }
`;
