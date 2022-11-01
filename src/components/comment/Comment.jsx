import styled from "styled-components";

const Comment=({comment, postId})=>{
    return(
        <Stdiv>
            <li className="comment-box" >
                <div className="comment">
                    <div className="comment-vote">
                            <button type="button" className="comment-nomal-button"></button>
                        <div className="comment-vote__count">0</div>
                    </div>
                    <div className="comment-meta">
                        <div className="comment-title">
                            <span className="comment__name">
                                <img src="//talk.op.gg/images/tier/icon-level-2.png" alt=""/>
                            </span>
                            <div>{comment.name}</div>
                            <span className="comment__time">{comment.time}</span>
                        </div>
                        <div className="comment-body">{comment.comment || comment.content}</div>
                        <div className="comment-bottom">
                            <div className="comment-bottom1">신고</div>
                            <div className="comment-bottom2">
                                <img src="https://talk.op.gg/images/icon-reply@2x.png" alt=""/>
                                답글쓰기
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </Stdiv>
    )
}

export default Comment;

const Stdiv = styled.div`
    
`