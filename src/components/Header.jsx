import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil";
import styled from "styled-components"
import { loginState, logoutState } from "../redux/modules/userSlice";
import { Login } from "../store/store";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const {isLogin} = useSelector(state=>state.user)
    const [isLogin, setisLogin] = useRecoilState(Login)
    
    const onLogoutHandler = () => {
        if(window.location.pathname==="/write"){
            if(window.confirm("로그아웃하시겠습니까?")){
                sessionStorage.removeItem('Access_Token');
                sessionStorage.removeItem('name')
                sessionStorage.removeItem('Refresh_Token')
                // dispatch(logoutState())
                setisLogin(false)
                navigate("/community")
            } 
            return;
        }
        sessionStorage.removeItem('Access_Token');
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('Refresh_Token')
        // dispatch(logoutState())
        setisLogin(false)
    };

    useEffect(() => {
        if(sessionStorage.getItem('Access_Token')){
            // dispatch(loginState())
            setisLogin(true)
            } else {
            // dispatch(logoutState())
            setisLogin(false)
            }
    
    },)

    return(
        <StHeader>
            <StHeaderContainer>
                <StLogoContainer>
                    <StLogoLink to="/">
                        <StLogoImg src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1666684602785"/>
                    </StLogoLink>
                </StLogoContainer>
                <StNavigationContontainer>
                    <StTolkpggContainer>
                        <StTolkpggBox>
                            <StTolkpggSpan>
                                <StTolkpggImg src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-white.svg"/>
                            </StTolkpggSpan>
                            톡피지지
                        </StTolkpggBox>
                    </StTolkpggContainer>
                    <StNavigationListContainer>
                        <StLolA href="https://op.gg">
                            <StLolSpan>
                                <StLolImg src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg" alt="리그오브레전드"/>
                            </StLolSpan>
                            League of Legends
                        </StLolA>
                        <StValA href="https://valorant.op.gg/">
                            <StValSpan>
                                <StValImg src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-valorant-white.svg" alt="리그오브레전드"/>
                            Beta
                            </StValSpan>
                            Valorant
                        </StValA>
                        <StPUBGA href="https://pubg.op.gg/">
                            <StPUBGSpan>
                                <StPUBGImg src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg" alt="리그오브레전드"/>
                            </StPUBGSpan>
                            PUBG
                        </StPUBGA>
                        <StWatchA href="https://overwatch.op.gg/">
                            <StWatchSpan>
                                <StWatchImg src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-overwatch-gray.svg" alt="리그오브레전드"/>
                            </StWatchSpan>
                            OVERWATCH
                        </StWatchA>
                        <StEternalA href="https://er.op.gg/">
                            <StEternalSpan>
                                <StEternalImg src="https://opgg-gnb.akamaized.net/static/images/icons/img_navi_bs.svg" alt="리그오브레전드"/>
                            </StEternalSpan>
                            Eternal Return
                        </StEternalA>
                        <StDuoA href="https://duo.op.gg/">
                            <StDuoSpan>
                                <StDuoImg src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-duo-gray.svg" alt="리그오브레전드"/>
                            </StDuoSpan>
                            Duo
                        </StDuoA>
                        <StQWERA href="https://qwer.gg/ko">
                            <StQWERSpan>
                                <StQWERImg src="https://opgg-gnb.akamaized.net/static/images/icons/opgg%20favicon%20white_220107.svg" alt="리그오브레전드"/>
                            </StQWERSpan>
                            QWER (Esports Data)
                        </StQWERA>
                        {isLogin? 
                        <StHeaderLogoutToggle>
                            <StHeaderLogoutSpan>
                                {sessionStorage.getItem('name')}
                                <StLogoutImg src="https://talk.op.gg/images/icon-gnb-dropdown.png"/>
                            </StHeaderLogoutSpan>
                            <StDropdown>
                                <StDropDownList>
                                    <StDropDownListItem>
                                        <StUserSetButton>계정 설정</StUserSetButton>
                                        <StUserSetButton onClick={onLogoutHandler}>로그아웃</StUserSetButton>
                                    </StDropDownListItem>
                                </StDropDownList>
                            </StDropdown>
                        </StHeaderLogoutToggle>
                        :<HeaderLoginButton onClick={() => navigate("/login")}>로그인</HeaderLoginButton>
                        }
                    </StNavigationListContainer>    
                </StNavigationContontainer>
            </StHeaderContainer>
            <StSecondHeaderContainer>
                <StSecondNavigationContontainer>
                    <StLeftHeader>
                        <StSecondLolA to="/Community">
                            리그오브레전드
                        </StSecondLolA>
                        <StSecondPUBGA>
                            배틀그라운드
                        </StSecondPUBGA>
                        <StSecondWatchA>
                            오버워치
                        </StSecondWatchA>
                        <StSecondRainA>
                            레인보우 식스 시즈
                        </StSecondRainA>
                    </StLeftHeader>
                </StSecondNavigationContontainer>
            </StSecondHeaderContainer>
        </StHeader>
        
    )
}

export default Header

const StHeader = styled.div`
    min-height: 40px;
    background-color: #28344e;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    top: 0;
    word-break: keep-all;
`
const StHeaderContainer = styled.div`
    background-color: rgb(40, 52, 78);
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    height: 40px;
    padding: 0 0 0 98px;
    vertical-align: baseline;
`
const StLogoContainer = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 0;
    top: 0;
    width: 98px;
    background: #46cfa7;
    vertical-align: baseline;
`
const StLogoLink =styled(Link)`
    text-decoration: none;
    margin: 0;
    border: 0;
    word-break: keep-all;
    display: block;
    padding: 12px 0;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 0;
    cursor: pointer;
`
const StNavigationContontainer = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    word-break: keep-all;
    -webkit-box-flex: 1;
    flex: 1;
    display: flex;
`
// margin-right: 120px!important;
const StLogoImg= styled.img`
    width:65px; 
    height:16px;
`
const StTolkpggContainer = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: relative;
    display: inline-block;
    height: 40px;
    background: #46cfa7;
    color: #fff;
`
const StTolkpggBox = styled.div`
    margin: 0;
    border: 0;
    word-break: keep-all;
    position: relative;
    height: 40px;
    line-height: 40px;
    padding: 0 12px 0 32px;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    box-sizing: border-box;
    vertical-align: middle;
`
const StTolkpggSpan = styled.span`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
    display: flex;
`
const StTolkpggImg = styled.img`
    margin: 0;
    padding: 0;
    word-break: keep-all;
    max-width: 100%;
    border: none;
    vertical-align: top;
    width: 100%;
    height: 100%;
`
const StNavigationListContainer = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    word-break: keep-all;
    -webkit-box-flex: 1;
    flex: 1;
    vertical-align: baseline;
`
const StLolA = styled.a`
    text-decoration: none;
    display: inline-block;
    word-break: keep-all;
    border: none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    outline: none;
    position: relative;
    height: 32px;
    line-height: 32px;
    padding: 0 8px 0 40px;
    color: #c5cbd0;
    font-size: 12px;
    white-space: nowrap;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 4px;
    vertical-align: middle;
`
const StLolSpan = styled.span`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
`
const StLolImg = styled.img`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
    vertical-align: middle;
`
const StValA = styled.a`
    text-decoration: none;
    display: inline-block;
    word-break: keep-all;
    border: none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    outline: none;
    position: relative;
    height: 32px;
    line-height: 32px;
    padding: 0 8px 0 40px;
    color: #c5cbd0;
    font-size: 12px;
    white-space: nowrap;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 4px;
    vertical-align: middle;
`
const StValSpan = styled.span`
    border: 0;
    word-break: keep-all;
    display: inline-block;
    border-radius: 9px;
    height: 16px;
    padding: 0 6px;
    margin: 0 4px 0 0;
    background-color: #ffb900;
    font-size: 12px;
    text-align: center;
    line-height: 1.5;
    letter-spacing: normal;
    color: #28344e;
    vertical-align: middle;
`
const StValImg = styled.img`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
    vertical-align: middle;
`
const StPUBGA = styled.a`
    text-decoration: none;
    display: inline-block;
    word-break: keep-all;
    border: none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    outline: none;
    position: relative;
    height: 32px;
    line-height: 32px;
    padding: 0 8px 0 40px;
    color: #c5cbd0;
    font-size: 12px;
    white-space: nowrap;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 4px;
    vertical-align: middle;
`
const StPUBGSpan = styled.span`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
`
const StPUBGImg = styled.img`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
    vertical-align: middle;
`
const StWatchA = styled.a`
    text-decoration: none;
    display: inline-block;
    word-break: keep-all;
    border: none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    outline: none;
    position: relative;
    height: 32px;
    line-height: 32px;
    padding: 0 8px 0 40px;
    color: #c5cbd0;
    font-size: 12px;
    white-space: nowrap;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 4px;
    vertical-align: middle;
`
const StWatchSpan = styled.span`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
`
const StWatchImg = styled.img`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
    vertical-align: middle;
`
const StEternalA = styled.a`
    text-decoration: none;
    display: inline-block;
    word-break: keep-all;
    border: none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    outline: none;
    position: relative;
    height: 32px;
    line-height: 32px;
    padding: 0 8px 0 40px;
    color: #c5cbd0;
    font-size: 12px;
    white-space: nowrap;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 4px;
    vertical-align: middle;
`
const StEternalSpan = styled.span`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
`
const StEternalImg = styled.img`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
    vertical-align: middle;
`
const StDuoA = styled.a`
    text-decoration: none;
    display: inline-block;
    word-break: keep-all;
    border: none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    outline: none;
    position: relative;
    height: 32px;
    line-height: 32px;
    padding: 0 8px 0 40px;
    color: #c5cbd0;
    font-size: 12px;
    white-space: nowrap;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 4px;
    vertical-align: middle;
`
const StDuoSpan = styled.span`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
`
const StDuoImg = styled.img`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
    vertical-align: middle;
`
const StQWERA = styled.a`
    text-decoration: none;
    display: inline-block;
    word-break: keep-all;
    border: none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    outline: none;
    position: relative;
    height: 32px;
    line-height: 32px;
    padding: 0 8px 0 40px;
    color: #c5cbd0;
    font-size: 12px;
    white-space: nowrap;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 4px;
    vertical-align: middle;
`
const StQWERSpan = styled.span`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
`
const StQWERImg = styled.img`
    padding: 0;
    border: 0;
    word-break: keep-all;
    position: absolute;
    left: 3px;
    top: 50%;
    display: flex;
    align-content: center;
    width: 24px;
    height: 24px;
    margin: -12px 0 0;
    vertical-align: middle;
`
const StSecondHeaderContainer = styled.div`
    padding: 0;
    overflow-x: hidden;
    overflow: visible;
    background: #46cfa7;
    border-bottom: 1px solid #31b38c;
    border: 0;
    vertical-align: baseline;
    margin: 0;
    height: 48px;
`
const StSecondNavigationContontainer =styled.div`
    max-width: 1044px;
    margin: 0 auto;
    display: block;
    padding: 0;
    border: 0;
`
const StLeftHeader = styled.div`
    float: left;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    justify-content: flex-start;
    align-items: center;
    width: auto;
`
const StSecondLolA = styled(Link)`
    display: block;
    float: left;
    line-height: 48px;
    margin-left: 0;
    position: relative;
    align-items: center;
    height: 48px;
    font-size: 15px;
    box-sizing: border-box;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
`
const StSecondPUBGA = styled.a`
    display: block;
    float: left;
    line-height: 48px;
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    font-size: 15px;
    box-sizing: border-box;
    color: #fff;
    margin-left: 24px;
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    margin-left: 24px;
`
const StSecondWatchA = styled.a`
    display: block;
    float: left;
    line-height: 48px;
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    font-size: 15px;
    box-sizing: border-box;
    color: #fff;
    margin-left: 24px;
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    margin-left: 24px;
`
const StSecondRainA = styled.a`
    display: block;
    float: left;
    line-height: 48px;
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    font-size: 15px;
    box-sizing: border-box;
    color: #fff;
    margin-left: 24px;
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    margin-left: 24px;
`
const HeaderLoginButton = styled.div`
    font-size: 12px;
    color: #c3cbd1;
    margin-top: 4px;
    margin-right: 10px;
    min-width: 50px;
    vertical-align: top;
    text-align: center;
    line-height: 15px;
    padding: 8px 0 7px;
    float: right;
    cursor: pointer;
`
const StHeaderLogoutToggle = styled.button`
    margin-top: 4px;
    float: right;
    background: none;
    display: flex;
    position: relative;
    cursor: pointer;
    margin: 0;
    font-size: 14px;
    outline: 0;
    appearance: auto;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: center;
    align-items: flex-start;
    box-sizing: border-box;
    border: 0px;
    flex-direction: column;
`
const StHeaderLogoutSpan = styled.span`
    font-size: 12px;
    color: #c3cbd1;
    position: relative;
    min-width: 120px;
    text-align: right;
    vertical-align: middle;
    float: right;
`
const StLogoutImg = styled.img`
    padding: 4px 0 4px 4px;
    vertical-align: middle;
`
const StDropdown = styled.div`
    justify-content: left;
    text-align: left;
    display: none;
    top: 40px;
    right: 5px;
    position: absolute;
    width: 160px;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 20%);
    background-color: #fff;
    ${StHeaderLogoutToggle}:hover & {display : block}
`
const StDropDownList = styled.ul`
    list-style: none;
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 15px;
`
const StDropDownListItem = styled.li`
    display: flex;
    margin: 0;
    border: 0;
    vertical-align: baseline;
    flex-direction: column;
    justify-content: left;
`
const StUserSetButton = styled.a`
    box-sizing: border-box;
    padding: 0;
    font-size: 14px;
    color: #1e2022;
    border: 0;
    border-radius: 0;
    width: 100%;
    padding: 10px 0;
`