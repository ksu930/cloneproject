import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import CommunityLayout from "../components/community/CommunityLayout"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import { isSuccessFalse, __editPost, __getDetailPost, __getPost, __postFeed } from "../redux/modules/postSlice"

const WritePage=( ) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const postId = useParams()
    const id = Number(postId.id)
    
    const {isSuccess, post, posts} = useSelector(state=>state.post)
    const editPost = posts.find((a) => a.postId===id)

    const initialState = {
        title: "",
        content: "",
    };

    const [editedPost, setEditedPost] = useState({
        title: editPost?.title,
        content : editPost?.content
    })
    const [new_post, setNew_Post] = useState(initialState);
    const [imgSave, setImgSave] = useState("");

    const saveFileImage = (e) => {
        setImgSave(URL.createObjectURL(e.target.files[0]));
    };

    const onUpLoadHandler = (e) => {
        const { name, value } = e.target;
        setNew_Post({ ...new_post, [name]: value });
    };
    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setEditedPost({
            ...editedPost, [name]:value,
        });
    };
    
    const onPostingHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        let postimage = document.getElementById("img_file");
        formData.append(
          "postCreateRequestDto",
          new Blob([JSON.stringify(new_post)], { type: "application/json" })
        );
        formData.append("file", postimage.files[0]);
        dispatch(__postFeed(formData));
      };

    const onEditHandler = (event) => {
    if (editedPost.content === "" && editedPost.title === "") {
        event.preventDefault();
        alert("제목이나 내용 둘다 비어있을 수 없습니다.");
    } else {
        event.preventDefault();
        dispatch(__editPost({editedPost, id}));
        navigate(`/detail/${id}`)
    } 
    };

    useEffect(()=>{
    if(isSuccess){
        dispatch(__getDetailPost(post.postId));
        navigate(`/detail/${post.postId}`)
        dispatch(isSuccessFalse())
    }
    },[onPostingHandler])

    useEffect(() => {
        dispatch(__getPost());
    }, [dispatch]);

    useEffect(() => {
        if(id) dispatch(__getDetailPost(id));
    // eslint-disable-next-line
    }, [dispatch]);

    useEffect(()=>{
        setEditedPost(
            {
                title: editPost?.title,
                content : editPost?.content
            }
        )
    },[posts])

    if(!id){
        return(
            <Layout>
                <CommunityLayout>
                    <StForm enctype="multipart/form-data" onSubmit={onPostingHandler}>
                        <div className="article-write">
                            <div className="article-write-header">
                                <div className="article-write__title">글쓰기</div>
                            </div>
                            <div className="article-write-input">
                                <input 
                                className="article-write__text"
                                type="text" 
                                name="title" 
                                value={new_post.title}
                                onChange={onUpLoadHandler}
                                placeholder="제목"
                                required
                                />
                            </div>
                            <div className="article-write-input--link">
                                <div className="img_input_box">
                                    <label className="img_input_label" htmlFor="img_file">
                                        내 컴퓨터에서 사진을 선택해주세요.
                                    </label>
                                    <input 
                                    className="img_input" 
                                    type="file" 
                                    id="img_file" 
                                    accept="image/*"
                                    onChange={saveFileImage}
                                    />
                                </div>
                            </div>
                            <div className="article-write-content">
                                <div className="prev-img-box">
                                <img className="prev-img" alt="" src={imgSave ? imgSave : "image/no_img.png"}/>
                                </div>
                                <textarea 
                                className="comment_input" 
                                type="text" 
                                name="content" 
                                value={new_post.content} 
                                onChange={onUpLoadHandler}
                                placeholder="불법촬영물등을 게재할 경우 전기통신사업법 제22조의5제1항에 따라 삭제·접속차단 등의 조치가 취해질 수 있으며 관련 법률에 따라 처벌받을 수 있습니다."
                                required
                                />
                            </div>
                        </div>
                        <div className="article-content-banner">
                            <img src="https://talk.op.gg/images/icon-adult-s@2x.png" alt="" />
                            <span>
                                불법촬영물등을 게재할 경우 전기통신사업법 제22조의5제1항에 따라 삭제·접속차단 등의 조치가 취해질 수 있으며 관련 법률에 따라 처벌받을 수 있습니다.
                            </span>
                        </div>
                        <div className="article-write-buttons">
                            <button className="cancle_button" type="button" onClick={() => {navigate("/community")}}>취소</button>
                            <button className="submit_button">작성완료</button>
                        </div>
                    </StForm>
                </CommunityLayout>
                <Footer/>
            </Layout>
        )
    } else{
        return(
            <Layout>
                <CommunityLayout>
                    <StForm enctype="multipart/form-data" onSubmit={onEditHandler}>
                        <div className="article-write">
                            <div className="article-write-header">
                                <div className="article-write__title">글쓰기</div>
                            </div>
                            <div className="article-write-input">
                                <input 
                                className="article-write__text"
                                type="text" 
                                name="title" 
                                value={editedPost?.title}
                                onChange={onChangeHandler}
                                placeholder="제목"
                                required
                                />
                            </div>
                            <div className="article-write-input--link">
                            <div className="img-box">
                                <img src={`${post.img||post.image}`} alt=""/>
                            </div>
                            </div>
                            <div className="article-write-content">
                                <div className="prev-img-box">
                                <img className="prev-img" alt="" src={imgSave ? imgSave : "image/no_img.png"}/>
                                </div>
                                <textarea 
                                className="comment_input" 
                                type="text" 
                                name="content" 
                                value={editedPost?.content} 
                                onChange={onChangeHandler}
                                placeholder="불법촬영물등을 게재할 경우 전기통신사업법 제22조의5제1항에 따라 삭제·접속차단 등의 조치가 취해질 수 있으며 관련 법률에 따라 처벌받을 수 있습니다."
                                required
                                />
                            </div>
                        </div>
                        <div className="article-content-banner">
                            <img src="https://talk.op.gg/images/icon-adult-s@2x.png" alt="" />
                            <span>
                                불법촬영물등을 게재할 경우 전기통신사업법 제22조의5제1항에 따라 삭제·접속차단 등의 조치가 취해질 수 있으며 관련 법률에 따라 처벌받을 수 있습니다.
                            </span>
                        </div>
                        <div className="article-write-buttons">
                            <button className="cancle_button" type="button" onClick={() => {navigate(`/detail/${id}`)}}>취소</button>
                            <button className="submit_button">작성완료</button>
                        </div>
                    </StForm>
                </CommunityLayout>
                <Footer/>
            </Layout>
        )
    }
      
    
}
export default WritePage

const StForm = styled.form`
    float: right;
    box-sizing: border-box;
    width: 728px;
    margin-top: -40px;
    .article-write{
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
        margin-top: 0;
        padding: 16px;
        z-index: 0;
        background: #fff;
        margin: 0;
    }
    .article-write-header{
        position: static;
        background: #fff;
        text-align: left;
        padding-bottom: 0;
        padding-top: 8px;
        left: 0;
        top: 0;
        width: 100%;
        padding: 18px 0 17px;
    }
    .article-write__title{
        color: #1e2022;
        font-weight: 700;
        line-height: 21px;
        font-size: 18px;
    }
    .article-write-input{
        margin-top: 8px;
    }
    .article-write__text{
        display: block;
        width: 100%;
        background-color: #fff;
        border: 1px solid #dddfe4;
        padding: 10px 16px 9px;
        line-height: 19px;
        font-size: 16px;
        color: #1e2022;
        box-sizing: border-box;
        outline: none;
    }
    .article-write-input--link{
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .prev-img{
        width: 30%;
    }
    .img_input{
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
    }
    .img_input_box{
        align-items: center;
        width: 100%;
        background: #f8f9fa;
        border: 1px solid #dddfe4;
        padding: 10px 16px 9px;
        font-size: 16px;
        color: #1e2022;
        box-sizing: border-box;
    }
    .img_input_label{
        background: url("https://talk.op.gg/images/icon-url@2x.png?bc300c8ad4da052f55b82ac8f00d5c63");
        background-size: 24px;
        width: 24px;
        height: 24px;
        top: 6px;
        left: 16px;
        background-repeat: no-repeat;
        padding-left: 35px;        
    }
    .article-write-content{
        margin-top: 16px;
        min-height: 500px;
        box-sizing: border-box;
        height: 500px;
        line-height: 1;
        color: #222;
        width: 100%;
        height: inherit;
        background-color: #fff;
        border: 1px solid #e5e5e5;
    }
    .prev-img-box{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #dddfe4;
    }
    .comment_input{
        width: 100%;
        height: 290px;
        box-sizing: border-box;
        margin: 0;
        padding: 16px 25px 0;
        font-size: 13px;
        color: #33383c;
        min-height: 0px;
        border: none;
        resize: none;
        outline: none;
        ::placeholder{
            color: grey;
            line-height: 160%;
            font-size: 16px;
        }
    }
    .article-content-banner{
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 20px;
        color: #7b858e;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
        margin-top: 8px;
        padding: 16px;
        z-index: 0;
        background: #fff;
        img{
            width: 24px;
            height: 24px;
            margin-right: 8px;}
        }
    .article-write-buttons{
        width: 100%;
        position: static;
    }
    .cancle_button{
        margin-left: 0;
        line-height: 19px;
        font-size: 16px;
        color: #7b858e;
        border-radius: 4px;
        background-color: #fff;
        border: 1px solid #dddfe4;
        width: 154px;
        height: 48px;
        margin-top: 16px;
        cursor: pointer;
    }
    .submit_button{
        margin-right: 0;
        float: right;
        margin-top: 16px;
        position: static;
        color: #fff;
        border-radius: 4px;
        background-color: #46cfa7;
        width: 154px;
        height: 48px;
        line-height: 19px;
        font-size: 16px;
        font-family: inherit;
        border: 0;
        padding: 0;
        cursor: pointer;
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
`