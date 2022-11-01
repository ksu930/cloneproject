import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"

const CommunityLayout = ({children}) =>{
    const {isLogin} = useSelector(state=>state.user)
    return(
        <Stcontent>
            <StSidebar>
                <StSidebarInner>
                    <StSidebarContentWrap>
                        <StSidebarContentHeader>
                            {isLogin ?
                            <>
                            <div className="account-info">
                                <span className="account__tier">
                                    <img className="account__tier-icon" src="//talk.op.gg/images/tier/icon-level-1.png" alt="level"></img>
                                </span>
                                <div className="account__info">
                                    <div className="account__name">닉네임</div>
                                    <div className="account__level">레벨1</div>
                                    <div className="level-chart">
                                        <div className="level-chart__gauge"></div>
                                    </div>
                                    <div className="level-next">다음 레벨까지 9 남음</div>
                                </div>
                            </div>
                            <div className="sidebar-button-login">
                                <div className="sidebar-button__item-login">
                                    <Link to="/Maypage" className="link-button">
                                        <button className="white-button">내가 쓴 글</button>
                                    </Link>
                                </div>
                                <div className="sidebar-button__item-login">
                                    <button className="white-button">내 와드</button>
                                </div>
                                <div className="sidebar-button__item-login">
                                    <Link to="/write" className="link-button-green">
                                        <button className="green-button">글쓰기</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="sidebar-button--row">
                                <div className="sidebar-button__item">
                                    <button>게임 계정 연결</button>
                                </div>
                            </div>
                            </>
                            :
                            <div className="sidebar-button-logout">
                                <div className="sidebar-button__item-logout">
                                    <StLoginLink to="/login">
                                        <button>로그인</button>
                                    </StLoginLink>
                                </div>
                            </div>}
                        </StSidebarContentHeader>
                        <StSidebarContent>
                            <div className="sidebar-menu">
                                <div className="sidebar-menu__title">홈</div>
                                <ul className="sidebar-menu__list">
                                    <li className="sidebar-menu__item ">
                                        <StHomeLink to="/Community">
                                            전체
                                        </StHomeLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar-menu">
                                <div className="sidebar-menu__title">정보</div>
                                <ul className="sidebar-menu__list">
                                    <li className="sidebar-menu__item ">
                                        <div className="a">OP.GG 기획</div>
                                        <div className="a">유저 뉴스</div>
                                        <div className="a">팁과 노하우</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar-menu">
                                <div className="sidebar-menu__title">커뮤니티</div>
                                <ul className="sidebar-menu__list">
                                    <li className="sidebar-menu__item ">
                                        <div className="a">자유</div>
                                        <div className="a">유머</div>
                                        <div className="a">영상</div>
                                        <div className="a">유저 찾기</div>
                                        <div className="a">사건 사고</div>
                                        <div className="a">팬 아트</div>
                                    </li>
                                </ul>
                            </div>
                        </StSidebarContent>
                    </StSidebarContentWrap>
                </StSidebarInner>
            </StSidebar>
            {children}
        </Stcontent>
    )
}

export default CommunityLayout

const Stcontent = styled.div`
    position: relative;
    max-width: 1044px;
    margin: 0 auto;
    display: block;
`
const StSidebar = styled.div`
    margin-top: -40px;
    display: block;
    width: 300px;
    float: left;
    z-index: 1000;
    will-change: min-height;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`
const StSidebarInner = styled.div`
    position: relative;
    transform: translate3d(0px, 0px, 0px);
    will-change: position,transform;
`
const StSidebarContentWrap = styled.div`
    position: static;
    padding-bottom: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
    width: 300px;
    overflow-y: auto;
    display: block;

`
const StSidebarContentHeader = styled.div`
    padding: 16px;
    .sidebar-button-logout{
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .sidebar-button__item-logout{
        padding-right: 0;
        padding-left: 0;
        display: table-cell;
    }
    .account-info{
        padding-bottom: 16px;
        display: block;
        
        .account__tier{
            width: 54px;
            height: 54px;
            float: left;
            .account__tier-icon{
                width: 54px;
                height: 54px;
            }
        }
        .account__info{
            float: left;
        width: calc(100% - 62px);
        margin-left: 8px;
        }
        .account__name{
            line-height: 17px;
            font-size: 14px;
            font-weight: 700;
            color: #1e2022;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .account__level{
            margin-top: 4px;
            line-height: 15px;
            font-size: 12px;
            color: #16ae81;
        }
        .level-chart{
            height: 6px;
            margin-top: 8px;
            border-radius: 4px;
            background-color: #ebeef1;
        }
        .level-chart__gauge{
            width: 18%;
            height: 6px;
            border-radius: 4px;
            background-image: linear-gradient(95deg,#1ea1f7,#46cfa7);
        }
        .level-next{
            margin-top: 4px;
            line-height: 15px;
            font-size: 12px;
            text-align: right;
            color: #98a0a7;
        }
    }
    .sidebar-button-login{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 16px;
    }
    .sidebar-button__item-login{
        padding-left: 0;
        display: table-cell;
        margin-top: 16px;
        .white-button{
            width: 79.328px;
            display: block;
            padding: 11px 0 10px;
            line-height: 17px;
            font-size: 14px;
            background-color: #fff;
            box-sizing: border-box;
            text-align: center;
            color: #46cfa7;
            border-radius: 4px;
            border: 1px solid #46cfa7;
            cursor: pointer;
            &:hover{
                background-color: #dddfe4;
            }
        }
        .green-button{
            width: 79.328px;
            display: block;
            padding: 11px 0 10px;
            line-height: 17px;
            font-size: 14px;
            background-color: #46cfa7;
            box-sizing: border-box;
            text-align: center;
            color: #fff;
            border-radius: 4px;
            border: 1px solid #46cfa7;
            cursor: pointer;
            &:hover{
                background-color: #0FB180;
            }
        }
    }
    .link-button{
        text-decoration: none;
        display: block;
    }
    .link-button-green{
        text-decoration: none;
        display: block;
    }
    .sidebar-button--row{
        margin-top: 8px;
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .sidebar-button__item{
        padding-right: 0;
        padding-left: 0;
        display: table-cell;
        button{
            width: 100%;
            display: block;
            padding: 11px 0 10px;
            line-height: 17px;
            font-size: 14px;
            box-sizing: border-box;
            text-align: center;
            border-color: #46cfa7;
            background-color: #46cfa7;
            color: #fff;
            border-radius: 4px;
            border: 1px solid #dddfe4;
            cursor: pointer;
            &:hover{
                background-color: #0FB180;
            }
        }
    }
`
const StLoginLink =styled(Link)`
    display: block;
    padding: 11px 0 10px;
    line-height: 17px;
    font-size: 14px;
    text-decoration: none;
    button{
        display: block;
        padding: 11px 0 10px;
        line-height: 17px;
        font-size: 14px;
        box-sizing: border-box;
        text-align: center;
        border-color: #46cfa7;
        background-color: #46cfa7;
        color: #fff;
        border-radius: 4px;
        border: 1px solid #dddfe4;
        cursor: pointer;
        width: 100%;
    }
`
const StSidebarContent = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    display: block;
    .sidebar-menu{
        border-top: 1px solid #ebeef1;
        padding: 9px 16px 8px;
    }
    .sidebar-menu__title{
        padding-bottom: 8px;
        line-height: 15px;
        font-size: 12px;
        color: #7b858e;
    }
    .sidebar-menu__list{
        list-style: none;
    }
    .sidebar-menu__item {
        line-height: 17px;
        font-size: 14px;
        color: #1e2022;
        border-radius: 4px;
        .a{
            padding: 8px 12px 7px;
            display: block;
            color: inherit;
            cursor: pointer;
        }
    }
`
const StHomeLink = styled(Link)`
    padding: 8px 12px 7px;
    display: block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`