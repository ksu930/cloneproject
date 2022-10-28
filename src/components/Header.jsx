import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
    return(
        <StHeader>
            <StHeaderContainer>
                <StLogoContainer>
                    <StLogoLink>
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

                    </StNavigationListContainer>
                    
                </StNavigationContontainer>
            </StHeaderContainer>
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
    position: sticky;
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
    overflow: hidden;
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
