import { Link } from "react-router-dom"
import styled from "styled-components"
import Layout from "../Layout"

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
                    </StSidebarContentWrap>
                </StSidebarInner>
            </StSidebar>
            

        </Stcontent>
    )
}

export default CommunityLayout

const Stcontent = styled.div`
    margin-top: -40px;
    position: relative;
    max-width: 1044px;
    margin: 0 auto;
    padding: 0;
    border: 0;
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
    }
`