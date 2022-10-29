import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <div>
      <Stnav>
        <StLi>
          <StImg src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1666684602785"></StImg>
          <StImgLi>
            <Stimg src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&v=1666684602785" />
            <LogoSpan>리그오브레전드</LogoSpan>
          </StImgLi>
        </StLi>
        <StLiList>
          <StLi>
            <Img1 src="https://opgg-gnb.akamaized.net/static/images/icons/01-icon-00-logo-icon-opggsquare.svg?image=q_auto,f_webp,w_48&v=1666684602785" />
            <StA1 href="https://op.gg/desktop/">데스크톱</StA1>
          </StLi>
          <StLi>
            <Img2 src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-valorant-white.svg?image=q_auto,f_webp,w_48&v=1666684602785" />
            <StA2 href="https://valorant.op.gg/">발로란트</StA2>
          </StLi>
          <StLi>
            <Img3 src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg?image=q_auto,f_webp,w_48&v=1666684602785" />
            <StA3 href="https://pubg.op.gg">배틀그라운드</StA3>
          </StLi>
          <StLi>
            <Img4 src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-overwatch-gray.svg?image=q_auto,f_webp,w_48&v=1666684602785" />
            <StA4 href="https://overwStAtch.op.gg">오버워치</StA4>
          </StLi>
          <StLi>
            <Img5 src="https://opgg-gnb.akamaized.net/static/images/icons/img_navi_bs.svg?image=q_auto,f_webp,w_48&v=1666684602785" />
            <StA5 href="https://er.op.gg">이터널 리턴</StA5>
          </StLi>
          <button>로그인</button>
        </StLiList>
      </Stnav>
      <StSubVarBox>
        <StSubVar>
          <li className="li1">홈</li>
          <li className="li2">챔피언 분석</li>
          <li className="li3">게임 모드</li>
          <li className="li4">통계</li>
          <li className="li5">랭킹</li>
          <li className="li6">프로관전</li>
          <li className="li7">멀티서치</li>
          <li className="li8">커뮤니티</li>
        </StSubVar>
      </StSubVarBox>
    </div>
  );
};
export default MainHeader;

const StImg = styled.img`
  width: 80px;
  height: 100%;
  padding-left: 15px;
  background-color: #5383e8;
`;
const Stimg = styled.img`
  margin: auto auto auto 20px;
  width: 24px;
  height: 24px;
`;
const LogoSpan = styled.span`
  width: 120px;
  margin: auto -10px auto 10px;
  font-size: small;
`;

const StImgLi = styled.li`
  background-color: #5383e8;
  height: 40px;
  display: flex;
`;

const Stnav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  height: 40px;
`;

const StLiList = styled.div`
  width: 90%;
  display: flex;
  background-color: #28344e;
  justify-content: space-between;
  button {
    background-color: #5383e8;
    border: 0px;
    border-radius: 5px;
    font-size: 12px;
    color: white;
    height: 60%;
    width: 60px;
    margin: auto 20px;
  }
`;
const StLi = styled.li`
  list-style: none;
  display: flex;
`;

const Img1 = styled.img`
  width: 24px;
  height: 24px;
  margin: auto 10px;
`;
const Img2 = styled.img`
  width: 24px;
  height: 24px;
  margin: auto 0px;
`;
const Img3 = styled.img`
  width: 24px;
  height: 24px;
  margin: auto 0px;
`;
const Img4 = styled.img`
  width: 24px;
  height: 24px;
  margin: auto 0px;
`;
const Img5 = styled.img`
  width: 24px;
  height: 24px;
  margin: auto 0px;
`;

const StA1 = styled.a`
  text-decoration: none;
  color: #c3cbd1;
  margin: auto 0px;
  font-size: 12px;
`;
const StA2 = styled.a`
  text-decoration: none;
  color: #c3cbd1;
  margin: auto 0px;
  font-size: 12px;
`;
const StA3 = styled.a`
  text-decoration: none;
  color: #c3cbd1;
  margin: auto 0px;
  font-size: 12px;
`;
const StA4 = styled.a`
  text-decoration: none;
  color: #c3cbd1;
  margin: auto 0px;
  font-size: 12px;
`;
const StA5 = styled.a`
  text-decoration: none;
  color: #c3cbd1;
  margin: auto 0px;
  font-size: 12px;
`;

const StSubVarBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const StSubVar = styled.nav`
  background-color: #5383e8;
  display: flex;
  width: 1080px;
  height: 40px;
  padding-left: 30px;
  margin-top: 10px;
  justify-content: space-between;
  .li1 {
    list-style: none;
    color: #c3cbd1;
    font-size: 15px;
  }
  .li2 {
    margin-left: -60px;
    list-style: none;
    color: #c3cbd1;
    font-size: 15px;
  }
  .li3 {
    margin-left: -60px;
    list-style: none;
    color: #c3cbd1;
    font-size: 15px;
  }
  .li4 {
    margin-left: -60px;
    list-style: none;
    color: #c3cbd1;
    font-size: 15px;
  }
  .li5 {
    margin-left: -60px;
    list-style: none;
    color: #c3cbd1;
    font-size: 15px;
  }
  .li6 {
    margin-left: -60px;
    list-style: none;
    color: #c3cbd1;
    font-size: 15px;
  }
  .li7 {
    margin-left: -60px;
    list-style: none;
    color: #c3cbd1;
    font-size: 15px;
  }
  .li8 {
    margin-left: -60px;
    list-style: none;
    color: #c3cbd1;
    font-size: 15px;
  }
`;
