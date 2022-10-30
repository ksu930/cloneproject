import { Link } from "react-router-dom"
import styled from "styled-components"

const CommunityLayout = ({children}) =>{
    return(
        <Stcontent>
            <StSidebar>
                <StSidebarInner>
                    <StSidebarContentWrap>
                        <StSidebarContentHeader>
                            <div className="sidebar-button">
                                <div className="sidebar-button__item">
                                    <StLoginLink to="/login">
                                        <button>로그인</button>
                                    </StLoginLink>
                                </div>
                            </div>
                        </StSidebarContentHeader>
                        <StSidebarContent>
                            <div className="sidebar-menu">
                                <div className="sidebar-menu__title">홈</div>
                                <ui className="sidebar-menu__list">
                                    <li className="sidebar-menu__item ">
                                        <StHomeLink to="/Community">
                                            전체
                                        </StHomeLink>
                                    </li>
                                </ui>
                            </div>
                            <div className="sidebar-menu">
                                <div className="sidebar-menu__title">정보</div>
                                <ui className="sidebar-menu__list">
                                    <li className="sidebar-menu__item ">
                                        <div className="a">OP.GG 기획</div>
                                        <div className="a">유저 뉴스</div>
                                        <div className="a">팁과 노하우</div>
                                    </li>
                                </ui>
                            </div>
                            <div className="sidebar-menu">
                                <div className="sidebar-menu__title">커뮤니티</div>
                                <ui className="sidebar-menu__list">
                                    <li className="sidebar-menu__item ">
                                        <div className="a">자유</div>
                                        <div className="a">유머</div>
                                        <div className="a">영상</div>
                                        <div className="a">유저 찾기</div>
                                        <div className="a">사건 사고</div>
                                        <div className="a">팬 아트</div>
                                    </li>
                                </ui>
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
    margin-top: -40px;
    position: relative;
    max-width: 1044px;
    margin: 0 auto;
    display: block;
`
const StSidebar = styled.div`
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
`
const StSidebarContentHeader = styled.div`
    padding: 16px;
    .sidebar-button{
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .sidebar-button__item{
        padding-right: 0;
        padding-left: 0;
        display: table-cell;
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