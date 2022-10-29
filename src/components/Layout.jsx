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
            <StFooter>
                <footer className="footer">
                    <div className="footer-link">
                        <ul className="footer-link-list">
                            <li className="footer-link-list__item__left">
                                <a href="https://www.op.gg/about">회사소개</a>
                            </li>
                            <li className="footer-link-list__item">
                                <a href="https://www.op.gg/policies/agreement">이용약관</a>
                            </li>
                            <li className="footer-link-list__item">
                                <a href="https://www.op.gg/policies/privacy">개인정보처리방침</a>
                            </li>
                            <li className="footer-link-list__item">
                                <a href="https://www.op.gg/policies/youth-policy">청소년 보호정책</a>
                            </li>
                            <li className="footer-link-list__item">
                                <a href="mailto:contact@op.gg">제휴</a>
                            </li>
                            <li className="footer-link-list__item">
                                <a href="mailto:service@op.gg">문의/피드백</a>
                            </li>
                            <li className="footer-link-list__item">
                                <a href="http://log.op.gg/op-gg-recruit-wanted/">채용</a>
                            </li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="corp-info">
                            <img src="https://talk.op.gg/images/img-logo-footer@2x.png" alt="OP.GG"></img>
                            서울특별시 강남구 삼성로85길 35-6 (대치동, 목천빌딩)
                            <br/>
                            Tel: 02) 455-9903 / Fax: 02) 455-9904 ㈜오피지지 (대표자 : 최상락)
                            <br/>
                            사업자등록번호 : 295-88-00023
                            <br/>
                            <br/>
                            © OP.GG. All rights reserved
                        </div>
                        <div className="corp-sns">
                            <ul>
                                <li>
                                    <a href="https://twitter.com/GlobalOPGG">
                                        <img src="https://talk.op.gg/images/img-footer-twitter@2x.png" alt="Twitter"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/opgginc/">
                                        <img src="https://talk.op.gg/images/img-footer-instagram@2x.png" alt="Instagram"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/lolopgg">
                                        <img src="https://talk.op.gg/images/img-footer-facebook@2x.png" alt="Facebook"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </StFooter>
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
const StFooter = styled.div`
    .footer{
        padding-top: 32px;
        padding-bottom: 32px;
        background: #ebeef1;
    }
    .footer-link{
        border-left: none;
        background: #dddfe4;
        overflow: hidden;
        padding-bottom: 20px;
    }
    .content{
        padding: 32px 0;
        position: relative;
        max-width: 1044px;
        ;
        
    }
    .footer-link-list{
        padding: 0;
        margin: 19px auto 18px;
        max-width: 1044px;
    }
    .footer-link-list__item__left {
        padding-left: 0;
        margin-left: 0;
        border-left: 0;
        display: block;
        float: left;
        color: #7b858e;
        line-height: 19px;
        font-size: 16px;
        a{
            display: block;
            text-decoration: none;
            color: inherit;
            cursor: pointer;
        }
    }
    .footer-link-list__item {
        padding-left: 16px;
        margin-left: 16px;
        float: left;
        border-left: 1px solid #c5cbd0;
        padding-left: 8px;
        margin-left: 8px;
        color: #7b858e;
        line-height: 19px;
        font-size: 16px;
        a{
            display: block;
            text-decoration: none;
            color: inherit;
            cursor: pointer;
        }
    }
    .content{
        padding: 32px 0;
        position: relative;
        max-width: 1044px;
        margin: 0 auto;
    }
    .corp-info{
        line-height: 20px;
        font-size: 14px;
        color: #7b858e;
        img{
            margin-bottom: 24px;
            display: block;
            width: 93px;
        }
    }
    .corp-sns{
        right: 0;
        margin-top: 0;
        position: absolute;
        bottom: 32px;
        ul{
            list-style: none;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding-inline-start: 40px;
            margin: 0;
            padding: 0;
            border: 0;
            vertical-align: baseline;
            li{
                float: left;
                margin-left: 15px;
                img{
                    height: 24px;
                    vertical-align: middle;
                    color: inherit;
                }
            }
        }
    }
`