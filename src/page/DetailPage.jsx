import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import CommunityLayout from "../components/community/CommunityLayout"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import { __getDetailPost, __postComment } from "../redux/modules/postSlice"
import Comments from "../components/comment/Comment"

const DetailPage=( ) =>{
    const postId = useParams()
    const id = Number(postId.id)
    const dispatch = useDispatch();
    const {post} = useSelector(state=>state.post)
    const [content, setContent] = useState({
        content:""
  });

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setContent({
            ...content, [name]:value,
        });
    };

    useEffect(() => {
        dispatch(__getDetailPost(id));
      }, [dispatch]);

    const onAddCommentHandler = (e) => {
        e.preventDefault()
        if(!sessionStorage.getItem('Access_Token')){
        alert("로그인을해야 댓글 작성이 가능합니다.");
        setContent({
            content:""
        });
        return
        }
        if(content.content.trim()==="" ){
            return alert("댓글을 모두 입력해주세요.");
        }        
        dispatch(__postComment({content, id}))
        setContent({
            content:""
        });
    };

    return(
        <Layout>
            <CommunityLayout>
                <StDetail>
                    <div className="article">
                        <div className="article-header">
                            <div className="article__title">{post.title}</div>
                            <div className="article-meta">
                                <div className="article-meta-list">
                                    <div className="article-list-item-meta__item">자유</div>
                                    <div className="article-meta__item">{post.time}</div>
                                    <div className="article-meta__item--name">
                                        <img src="//talk.op.gg/images/tier/icon-level-1.png" alt=""/>
                                        <span>{post.name}</span>
                                    </div>
                                </div>
                                <div className="article-meta-list--right">
                                    <div className="article-meta__item">댓글 {post.comments?.length}</div>
                                    <div className="article-meta__item_2">추천 {post.likeNum}</div>
                                </div>
                            </div>
                            {post.correctPost?
                            <div className="article-action">
                                <button className="delete-button" type="button">삭제</button>
                                <button className="edit-button" type="button">수정</button>
                            </div>
                            : null}
                        </div>
                        <div className="article-content-wrap">
                            <div className="img-box">
                                <img src={`${post.img}`} alt=""/>
                            </div>
                            <div className="article-content">{post.content}</div>
                        </div>
                        <div className="article-box">
                            <button type="button" className="like-button">
                                {true? <span className="like-button-img"></span>
                                : <span className="nomal-button-img"></span>}
                                <span className="like-button-num">0</span>
                            </button>
                        </div>
                        <div className="article-footer">
                            <img src="https://talk.op.gg/images/icon-share@2x.png" alt=""/>
                            <div>공유하기</div>
                            <div>신고</div>
                        </div>
                    </div>
                    <div className="comment-wrap">
                        <div className="comment-header">
                            <div className="left-box">
                                <h2 className="left-box-title">댓글</h2>
                                <div className="left-box-num">총 {post.comments?.length} 개</div>
                            </div>
                            <div className="right-box">
                                <div className="right-box-roll">대댓글 펴기</div>
                                <div className="right-box-reload">새로고침</div>
                            </div>
                        </div>
                        <form className="comment-write" onSubmit={onAddCommentHandler}>
                            <textarea 
                            className="comment-write__content"
                            type="text"
                            name="content"
                            value={content.content}
                            onChange={onChangeHandler}
                            placeholder="주제와 무관한 댓글, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."/>
                            <div className="comment-write-footer">
                                <button className="comment-write-submit">작성</button>
                            </div>
                        </form>
                    </div>
                    {post.comments?.length !== 0?
                        <div className="comments-wrap">
                            <div className="comment-sort">
                                <ul className="comment-sort__list">
                                    <li className="comment-sort__item">
                                        <button type="button">인기순</button>
                                    </li>
                                    <li className="comment-sort__item--active">
                                        <button type="button">최신순</button>
                                    </li>
                                </ul>
                            </div>
                            <ul className="comments-box">
                            {post.comments?.map((comment)=>{
                                return (<Comments key={comment.id} comment={comment} postId={id}/>)
                            })}
                            </ul>
                        </div>
                    :
                        <div className="comment-not">
                            <img className="comment-not__image" src="https://talk.op.gg/images/icon-comment@3x.png" alt=""/>
                            <div className="comment-not__message">등록된 댓글이 없습니다.</div>
                        </div>
                    }
                </StDetail>
            </CommunityLayout>
            <Footer/>
        </Layout>
    )
}
export default DetailPage

const StDetail = styled.div`
    float: right;
    box-sizing: border-box;
    width: 728px;
    margin-top: -40px;
    .article{
        background: #fff;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
    }
    .article-header{
        padding-left: 24px;
        padding-right: 24px;
        padding: 24px 16px;
    }
    .article__title{
        line-height: 36px;
        font-size: 24px;
        color: #1e2022;
        word-wrap: break-word;
        word-break: break-all;
        overflow: auto;
    }
    .article-meta{
        margin-top: 9px;
        margin-bottom: 50px;
        line-height: 17px;
        font-size: 14px;
        color: #7b858e;
    }
    .article-meta-list{
        float: left;
        margin-top: 0;
        .article-meta__item{
            display: inline-block;
            position: relative;
            margin-left: 15px;
            padding-left: 15px;
            line-height: 17px;
            font-size: 14px;
            color: #7b858e;
            border-left: 1px solid #dddfe4;
            left: 0;
        }
    }
    .article-list-item-meta__item{
        padding-left: 0;
        display: inline-block;
        line-height: 18px;
        font-size: 14px;
        color: #98a0a7;
        color: inherit;
    }
    .article-meta__item--name{
        display: inline-block;
        vertical-align: baseline;
        position: relative;
        margin-left: 15px;
        padding-left: 15px;
        line-height: 17px;
        font-size: 14px;
        color: #7b858e;
        border-left: 1px solid #dddfe4;
        left: 0;
        height: 17px;
        img{
            width: 24px;
            height: 24px;
            vertical-align: middle;
            margin-right: 10px;
        }
    }
    .article-meta-list--right{
        float: right;
        .article-meta__item{
            margin-left: 0;
            padding-left: 0;
            display: inline-block;
            vertical-align: middle;
            position: relative;
        }
        .article-meta__item_2{
            display: inline-block;
            vertical-align: middle;
            position: relative;
            margin-left: 8px;
            padding-left: 9px;
    left: 0;
    content: "";
    border-left: 1px solid #dddfe4;
        }
    }
    .article-action{
        margin-top: 50px;
        .delete-button{
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            font-size: 12px;
            padding: 8px 15px 7px;
            border: 1px solid #f95b54;
            background: #fff;
            color: #f95b54;
            border-radius: 4px;
            cursor: pointer;
        }
        .edit-button{
            line-height: 15px;
            font-size: 12px;
            padding: 8px 15px 7px;
            background: #fff;
            border-radius: 4px;
            border: 1px solid #dddfe4;
            cursor: pointer;
            margin-left: 20px;
        }
    }
    .article-content-wrap{
        display: flex;
        flex-direction: column;
        min-height: 400px;
        height: 400px;
    }
    .img-box{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img{
        width: 200px;
        height: 200px;
        }
    }
    .article-content{
        padding-right: 24px;
        padding-left: 24px;
        width: 100%;
        padding: 24px 16px;
        line-height: 24px;
        font-size: 16px;
        color: #1e2022;
        word-wrap: break-word;
        word-break: break-word;
        margin: 10px 0;
        color: #555;
    }
    .article-box{
        border-top: 1px solid #ebeef1;
        border-bottom: 1px solid #ebeef1;
        text-align: center;
        padding: 12px 0;
    }
    .like-button{
        padding: 12px;
        min-width: 88px;
        line-height: 17px;
        font-size: 14px;
        height: 43px;
        color: #1e2022;
        border-radius: 4px;
        background-color: #fff;
        border: 1px solid #dddfe4;
        background: none;
        cursor: pointer;
    }
    .like-button-img{
        width: 16px;
        height: 16px;
        background-image: url("https://talk.op.gg/images/icon_vote_up_on@2x.png?19f7f231e2eaaac1b5fee89062be003e.b");
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 16px;
        line-height: 999px;
        vertical-align: top;
        overflow: hidden;
        display: inline-block;
        margin-top: 1px;
        margin-right: 10px;
    }
    .nomal-button-img{
        width: 16px;
        height: 16px;
        background-image: url("https://talk.op.gg/images/icon-vote-up@2x.png?205b48be2477942b34439ce176a867fb");
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 16px;
        line-height: 999px;
        vertical-align: top;
        overflow: hidden;
        display: inline-block;
        margin-top: 1px;
        margin-right: 10px;
    }
    .like-button-num{
        display: inline-block;
        transition: all .3s;
    }
    .article-footer{
        display: flex;
        flex-direction: row;
        justify-content: end;
        padding: 16px;
        gap: 10px;
        line-height: 17px;
        font-size: 14px;
        color: #7b858e;
        background: #f8f9fa;
        img{
            width: 16px;
            height: 16px;
            padding-top: 1px;
        }

    }
    .comment-wrap{
        margin-top: 8px;
        background-color: #fff;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
    }
    .comment-header{
        flex-direction: row;
        padding: 16px;
        display: flex;
        justify-content: space-between;
    }
    .left-box{
        display: flex;
        flex-direction: row;
        gap:10px;
    }
    .left-box-title{
        line-height: 21px;
        font-size: 18px;
        color: #1e2022;
        font-weight: bold;
    }
    .left-box-num{
        line-height: 18px;
        font-size: 14px;
        color: #7b858e;
        padding-top: 2px;
    }
    .right-box{
        display: flex;
        flex-direction: row;
        gap:10px;
    }
    .right-box-roll{
        font-size: 14px;
        color: #7b858e;
        border: 0;
        vertical-align: middle;
    }
    .right-box-reload{
        font-size: 14px;
        color: #7b858e;
        border: 0;
        vertical-align: middle;
    }
    .comment-write{
        padding: 24px 16px;
        background: #f8f9fa;
        box-sizing: border-box;
        
    }
    .comment-write__content{
        background-color: #fff;
        border: 1px solid #dddfe4;
        padding: 16px 16px 0;
        line-height: 17px;
        font-size: 14px;
        color: #1e2022;
        padding-bottom: 16px;
        overflow: hidden;
        overflow-wrap: break-word;
        height: 80px;
        display: block;
        width: 100%;
        box-sizing: border-box;
        min-height: 40px;
        line-height: 20px;
        font-size: 14px;
        resize: none;
        outline: none;
    }
    .comment-write-footer{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: end;
        border-top: 1px solid #dddfe4;
        min-height: 42px;
        box-sizing: border-box;
    }
    .comment-write-submit{
        width: 92px;
        padding: 10px 9px;
        line-height: 20px;
        font-size: 16px;
        border-radius: 0;
        border-color: #46cfa7;
        background-color: #46cfa7;
        color: #fff;
        border: 1px solid #dddfe4;
        cursor: pointer;
        &:hover{
                background-color: #0FB180;
            }
    }
    .comments-wrap{
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        height: 100%;
    }
    .comment-sort{
        border-bottom: 1px solid #dddfe4;
        padding: 0 16px;
    }
    .comment-sort__list{
        list-style: none;
    }
    .comment-sort__item{
        float: left;
        button{
            padding: 15px 16px 11px;
            line-height: 19px;
            font-size: 16px;
            color: #1e2022;
            border: none;
            cursor: pointer;
            background: none;
        }
    }
    .comment-sort__item--active{
        float: left;
        button{
            padding: 15px 16px 11px;
            line-height: 19px;
            font-size: 16px;
            color: #16ae81;
            border : none;
            cursor: pointer;
            background: none;
            border-bottom: 3px solid #46cfa7;
        }
    }
    .comments-box{
        list-style: none;
    }
    .comment-box{
        border-top: 0;
        position: relative;
    }
    .comment{
        position: relative;
        padding: 12px 12px 12px 64px;
    }
    .comment-vote{
        position: absolute;
        left: 0;
        top: 12px;
        width: 64px;
        text-align: center;
        
    }
    .comment-like-button{
            width: 16px;
            height: 16px;
            background-color: #fff;
            background-image: url("https://talk.op.gg/images/icon_vote_up_on@2x.png?19f7f231e2eaaac1b5fee89062be003e.b");
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: 16px;
            line-height: 999px;
            vertical-align: top;
            overflow: hidden;
            margin-top: 4px;
            cursor: pointer;
            border: none;
            
    }
    .comment-nomal-button{
            width: 16px;
            height: 16px;
            background-color: #fff;
            background-image: url("https://talk.op.gg/images/icon-vote-up@2x.png?205b48be2477942b34439ce176a867fb");
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: 16px;
            line-height: 999px;
            vertical-align: top;
            overflow: hidden;
            margin-top: 4px;
            cursor: pointer;
            border: none;
    }
    .comment-meta{
        display: flex;
        flex-direction: column;
        line-height: 17px;
        font-size: 14px;
        color: #7b858e;
    }
    .comment__name{
        font-weight: 700;
        color: #1e2022;
        img{
            width: 24px;
            height: 24px;
        }
    }
    .comment-title{
        display: flex;
        flex-direction: row;
        div{
            margin-top : 3px;
            margin-left: 5px;
            font-weight: 700;
            font-size: 14px;
            color: #1e2022;
        }
        .comment__time{
            margin-top : 3px;
            margin-left: 8px;
            padding-left: 8px;
            border-left: 1px solid #ebeef1;
            height: 12px;
        }
    }
    .comment-body{
        line-height: 20px;
        font-size: 14px;
        color: #1e2022;
        word-wrap: break-word;
        word-break: break-all;
        overflow: auto;
        max-height: 400px;
    }
    .comment-bottom{
        display: flex;
        flex-direction: row;
        margin-top: 8px;
        .comment-bottom1{
            line-height: 17px;
            font-size: 14px;
            color: #7b858e;
        }
        .comment-bottom2{
            display: flex;
            flex-direction: row;
            line-height: 17px;
            font-size: 14px;
            color: #7b858e;
            img{
                padding-top: 2px;
                margin-left: 24px;
                width: 16px;
                height: 16px;
                margin-right: 8px;
            }
        }
    }
    .comment-not{
        padding: 32px 0;
        text-align: center;
        background-color: #fff;
    }
    .comment-not__image{
        width: 40px;
        height: 40px;
    }
    .comment-not__message{
        margin-top: 8px;
        line-height: 17px;
        font-size: 14px;
        color: #7b858e;
    }
`