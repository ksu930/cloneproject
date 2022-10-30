import { Link } from "react-router-dom"
import styled from "styled-components"
import Header from "./Header"

const Layout = ({children}) => {
    return(
        <St1WrapList>
            <Header/>
            <StNotice>
                <a href="https://talk.op.gg/s/lol/free/5502311">이용 약관, 개인정보 처리방침 개정 안내 (11/1)</a>
            </StNotice>
            <StBackground>
            <div className="backgroundImg"></div>
            <div className="content">
                <div className="game-info-content">
                    <StLink to={"/Community"}>
                        <img src="https://talk.op.gg/images/game/icon-community-lol.png" alt="game-info__icon"/>
                        <h1 className="game-info__name">리그오브레전드</h1>
                    </StLink>
                </div>
                <form className="game-info-search">
                    <input className="game-info-search__input" type="text" name="username" placeholder="소환사검색"/>
                    <button className="game-info-search__button">
                        <img src="https://talk.op.gg/images/btn-lol@2x.png" alt=""></img>
                    </button>
                </form>
            </div>
            </StBackground>
            {children}
        </St1WrapList>
    )
}

export default Layout

const St1WrapList = styled.div`
    min-width: 1080px;
    position: relative;
    min-height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    display: block;
    line-height: 1.5;
`
const StNotice = styled.div`
    background-color: #1e2022;
    text-align: center;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    a{  
        color: #fff;
        text-decoration: none;
        cursor: pointer;  
    }
`
const StBackground = styled.div`
    display: block;
    position: relative;
    height: 200px;
    background: #fff;
    .backgroundImg{
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-image: linear-gradient(180deg,rgba(51,56,60,.5),rgba(0,0,0,.5)),url("https://talk.op.gg/images/game/bg_lol.jpg");
        background-size: 100%;
        background-position: 50% 30%;
        
    }
    .content{
        position: relative;
        max-width: 1044px;
        margin: 0 auto;
        .game-info-content{
            padding-top: 75px;
            display: inline-block;
            position: relative;
            padding-left: 24px;
            white-space: nowrap;
        }
        .game-info-search{
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            margin-top: 102px;
            .game-info-search__input{
                border-radius: 2px;
                background: #fff;
                border: none;
                width: 268px;
                line-height: 17px;
                font-size: 14px;
                padding: 12px 62px 11px 12px;
                box-sizing: border-box;
            }
            .game-info-search__button{
                position: absolute;
                top: 0;
                right: 0;
                cursor: pointer;
                font-family: inherit;
                border: 0;
                padding: 0;
                margin: 0;
                font-size: 14px;
                img{
                    margin-top: 5px;
                    margin-right: 6px;
                    vertical-align: middle;
                    width: 50px;
                }            
            }
        }
    }

`
const StLink =styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    img{
        height: 60px;
        margin-right: 8px;
        float: left;
        vertical-align: middle;
    }
    h1{
        display: block;
        margin-top: 0;
        line-height: 39px;
        font-size: 32px;
        color: #fff;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
`