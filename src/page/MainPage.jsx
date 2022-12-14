import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";
import { __bestWrite } from "../redux/modules/postSlice";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__bestWrite());
  }, [dispatch]);

  const titleList = useSelector((state) => state.post.best?.data);

  return (
    <>
      <MainLayout>
        <StImgDiv>
          <StImg src="https://opgg-static.akamaized.net/logo/20221024143822.5f982558178b4dbf96c34ae9b2706d92.png?image=q_auto,f_webp,w_auto&v=1666684602785" />
        </StImgDiv>
        <StInputBox>
          <StFormBox>
            <StSelectBox>
              <StSmall>Region</StSmall>
              <StSelect>
                <StOption>Korea</StOption>
                <StOption>North America</StOption>
                <StOption>Europe West</StOption>
                <StOption>Europe Nordic & East</StOption>
                <StOption>Oceania</StOption>
                <StOption>Japan</StOption>
                <StOption>Brazil</StOption>
                <StOption>LAS</StOption>
                <StOption>LAN</StOption>
                <StOption>Russia</StOption>
                <StOption>Türkiye</StOption>
              </StSelect>
            </StSelectBox>
            <StInputDiv>
              <label>Search</label>
              <input type="text" placeholder="소환사명, 소환사명, ..." />
            </StInputDiv>
            <StSubmitButton>.GG</StSubmitButton>
          </StFormBox>
        </StInputBox>
        <StListBox>
          <StTitle>OP.GG Talk 인기글</StTitle>
          {titleList?.map((titleList, idx) => (
            <StArticle onClick={() => navigate(`/detail/${titleList.postId}`)}>
              <StBox>
                <div className="title">{idx + 1}</div>
                <StTitleImg src={`${titleList.img}`}></StTitleImg>
                <StContentBox>
                  <div className="content">
                    <span className="miniTitle">{titleList.title}</span>
                    <span className="like">[{titleList.commentsNum}]</span>
                  </div>
                  <StMeta>
                    <li>{titleList.time}</li>
                    <li className="nickname">{titleList.name}</li>
                  </StMeta>
                </StContentBox>
              </StBox>
            </StArticle>
          ))}
        </StListBox>
        <StFinamDiv>
          <StFinalDiv>
            <h2>
              <a href="/">
                <StLowImg src="https://s-lol-web.op.gg/images/icon/icon-opgglogo-white.svg?v=1666684602785"></StLowImg>
              </a>
            </h2>
          </StFinalDiv>
          <StFinalDiv>
            <h2>OP.GG</h2>
            <nav>
              <StFinalA href="https://www.op.gg/about">About OP.GG</StFinalA>
              <StFinalA href="https://log.op.gg/about-company">
                Company
              </StFinalA>
              <StFinalA href="https://log.op.gg/">Blog</StFinalA>
              <StFinalA href="https://www.op.gg/logos">로고 히스토리</StFinalA>
            </nav>
          </StFinalDiv>
          <StFinalDiv>
            <h2>Products</h2>
            <nav>
              <StFinalA href="https://op.gg">
                리그오브레전드
                <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
                <StFinalA href="https://op.gg">
                  데스크톱
                  <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
                </StFinalA>
                <StFinalA href="https://op.gg">
                  발로란트
                  <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
                </StFinalA>
                <StFinalA href="https://op.gg">
                  배틀그라운드
                  <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
                </StFinalA>
                <StFinalA href="https://op.gg">
                  오버워치
                  <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
                </StFinalA>
                <StFinalA href="https://op.gg">
                  이터널 리턴
                  <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
                </StFinalA>
                <StFinalA href="https://op.gg">
                  QWER(이스포츠 전적)
                  <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
                </StFinalA>
                <StFinalA href="https://op.gg">
                  톡피지지
                  <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
                </StFinalA>
                <StFinalA href="https://op.gg">
                  Duo
                  <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
                </StFinalA>
              </StFinalA>
            </nav>
          </StFinalDiv>
          <StFinalDiv>
            <h2>Apps</h2>
            <nav>
              <StFinalA href="https://play.google.com/store/apps/details?id=gg.op.lol.android&referrer=utm_source%3Dadblock%26utm_medium%3Dbanner">
                OP.GG Android App
                <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
              </StFinalA>
              <StFinalA href="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785">
                OP.GG IOS App
                <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
              </StFinalA>
              <StFinalA href="https://itunes.apple.com/kr/app/op-gg-%EC%98%A4%ED%94%BC%EC%A7%80%EC%A7%80/id605722237?mt=8">
                IfI.GG Android App
                <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
              </StFinalA>
              <StFinalA href="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785">
                IFI.GG iOS App
                <StFinalImg src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1666684602785" />
              </StFinalA>
            </nav>
          </StFinalDiv>
          <StFinalDiv>
            <h2>Resources</h2>
            <nav>
              <StFinalA href="https://www.op.gg/policies/privacy">
                <strong>개인정보처리방침</strong>
              </StFinalA>
              <StFinalA href="https://www.op.gg/policies/agreement">
                이용약관
              </StFinalA>
              <StFinalA href="https://opggkr.helpscoutdocs.com/collection/121-opgg">
                도움말
              </StFinalA>
              <StFinalA href="mailto:service@op.gg">문의/피드백</StFinalA>
            </nav>
          </StFinalDiv>
          <StFinalDiv>
            <h2>More</h2>
            <nav>
              <StFinalA href="mailto:contact@op.gg">제휴</StFinalA>
              <StFinalA href="mailto:ads@op.gg">광고</StFinalA>
              <StFinalA href="https://www.opgg.team/">채용</StFinalA>
            </nav>
          </StFinalDiv>
        </StFinamDiv>
        <StFinalDivBox>
          <StLine>
            <hr />
          </StLine>
          <StFinalSmallBox>
            <StFinalSmall>
              © 2012-2022 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t
              reflect the views or opinions of Riot Games or anyone officially
              involved in producing or managing League of Legends. League of
              Legends and Riot Games are trademarks or registered trademarks of
              Riot Games, Inc. League of Legends © Riot Games, Inc.
            </StFinalSmall>
            <StSnsBox>
              <a href="https://twitter.com/globalopgg/">
                <StSnsImg src="https://s-lol-web.op.gg/images/icon/icon-logo-twitter.svg?v=1666684602785" />
              </a>
              <a href="https://www.instagram.com/opgginc/">
                <StSnsImg src="https://s-lol-web.op.gg/images/icon/icon-logo-instagram.svg?v=1666684602785" />
              </a>
              <a href="https://s-lol-web.op.gg/images/icon/icon-logo-instagram.svg?v=1666684602785">
                <StSnsImg src="https://s-lol-web.op.gg/images/icon/icon-logo-facebook.svg?v=1666684602785" />
              </a>
            </StSnsBox>
          </StFinalSmallBox>
        </StFinalDivBox>
      </MainLayout>
    </>
  );
};
export default MainPage;
const StImgDiv = styled.div`
  margin: auto;
  text-align: center;
`;

const StImg = styled.img`
  max-height: 224px;
  margin: 50px auto;
`;

const StListBox = styled.div`
  background-color: white;
  height: 468px;
  width: 536px;
  border-radius: 5px;
  margin: auto;
  margin-top: 50px;
`;
const StTitle = styled.div`
  padding: 17px 0px 16px 20px;
  line-height: 17px;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
`;
const StBox = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 14px;
  padding: 10px 0px 16px 20px;
  justify-content: space-between;

  .title {
    font-size: 18px;
    font-style: oblique;
    font-weight: bold;
    flex-basis: 55px;
    text-align: center;
    margin: auto;
  }
`;

const StInputBox = styled.div`
  position: relative;
  width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StFormBox = styled.form`
  background-color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 19%);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border-radius: 30px;
  height: 60px;
  text-align: left;
`;

const StSelectBox = styled.div`
  padding-left: 32px;
  padding-right: 8px;
  margin-right: 8px;
  position: relative;
  height: 40px;
`;
const StInputDiv = styled.div`
  position: relative;
  height: 40px;

  label {
    position: absolute;
    z-index: 100;
    display: block;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 4px;
    font-style: normal;
    cursor: pointer;
  }

  input {
    position: relative;
    width: 480px;
    padding: 20px 0 0;
    border: 0;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 20px;
  }
`;

const StSubmitButton = styled.button`
  background-color: white;
  background-image: url(https://s-lol-web.op.gg/images/icon/icon-gg.svg);
  background-repeat: no-repeat;
  background-size: 42px;
  background-position: 12px center;
  width: 49px;
  font-size: 0;
  box-sizing: content-box;
  cursor: pointer;
  padding-left: 12px;
  height: 90%;
  border: 0px;
  margin-right: 20px;
`;

const StSmall = styled.small`
  display: block;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  font-style: normal;
`;

const StSelect = styled.select`
  border-radius: 0;
  background: #fff;
  border: none;
  vertical-align: middle;
`;

const StOption = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
`;

const StArticle = styled.article`
  width: 100%;
  display: block;

  border-top: 0.25px solid;
  border-top-color: rgba(204, 204, 204, 0.35);
`;

const StTitleImg = styled.img`
  border: 0;
  height: 56px;
  width: 100px;
  text-align: center;
  max-width: 100%;
`;

const StContentBox = styled.div`
  padding: 10px 20px;
  box-sizing: border-box;
  overflow: hidden;
  flex: 1 1 0%;
  width: 317px;
  height: 43.5px;

  .miniTitle {
    font-size: 14px;
    color: rgb(135, 146, 146);
  }
  .miniTitle:hover {
    color: #5383e8;
    border-bottom: 0.5px solid #5383e8;
  }
  .like {
    margin-left: 4px;
    color: #5383e8;
  }
`;

const StMeta = styled.ul`
  margin-top: 5.5px;
  color: rgb(135, 146, 146);
  line-height: 15px;
  font-size: 12px;
  display: flex;

  .nickname {
    margin-left: 12px;
  }
`;

const StLowImg = styled.img`
  width: 99px;
  height: 24px;
`;

const StFinalImg = styled.img`
  vertical-align: middle;
  margin-left: 8px !important;
  border: 0;
  max-width: 100%;
  width: 16px;
  aspect-ratio: auto 16 / 16;
  height: 16px;
`;

const StFinamDiv = styled.div`
  width: 1080px;
  margin: 70px auto;
  display: flex;
`;

const StFinalDiv = styled.div`
  width: 170px;
  height: 255.17px;
  h2 {
    width: 170px;
    height: 36px;
    font-size: 14px;
    color: white;
    padding-bottom: 16px;
    font-weight: bold;
  }
`;

const StFinalA = styled.div`
  display: inline-block;
  width: 100%;
  line-height: 20px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
`;

const StFinalDivBox = styled.div`
  width: 1080px;
  margin: 0px auto auto auto;
`;
const StLine = styled.div`
  width: 1020px;
  height: 60.66px;
  margin: 24px 0px 0px;
  padding: 24px 0px 0px;

  hr {
    width: 100%;
  }
`;

const StFinalSmall = styled.small`
  color: #fff;
  font-size: 12px;
  display: inline-block;
`;
const StFinalSmallBox = styled.div`
  width: 984.03px;
  height: 35.56px;
  display: flex;
`;
const StSnsBox = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 3px;
  margin-right: -40px;
`;
const StSnsImg = styled.img`
  width: 24px;
  height: 24px;
  border: 0px;
`;
