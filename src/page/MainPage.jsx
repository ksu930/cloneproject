import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";

const MainPage = () => {
  return (
    <>
      <MainLayout>
        <StImgDiv>
          <StImg src="https://opgg-static.akamaized.net/logo/20221024143822.5f982558178b4dbf96c34ae9b2706d92.png?image=q_auto,f_webp,w_auto&v=1666684602785" />
        </StImgDiv>

        <StListBox>
          <StTitle>op.gg Talk 인기글</StTitle>
          <StArticle>
            <StBox>
              <div className="title">1</div>
              <StTitleImg src="https://opgg-com-image.akamaized.net/attach/images/20221029031554.1704113.jpg"></StTitleImg>
              <StContentBox>
                <div className="content">
                  <span className="miniTitle">멍청한 사람과 논쟁하는 느낌</span>
                  <span className="like">[40]</span>
                </div>
                <StMeta>
                  <li>10시간 전</li>
                  <li className="nickname">삼각탈출</li>
                </StMeta>
              </StContentBox>
            </StBox>
          </StArticle>
        </StListBox>
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
  height: 405px;
  width: 550px;
  border-radius: 3px;
  margin: auto;
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
  padding: 17px 0px 16px 20px;
  justify-content: space-between;

  .title {
    font-size: 18px;
    font-style: oblique;
    font-weight: bold;
    margin: auto;
    width: 30px;
  }
`;

const StArticle = styled.div`
  border-bottom: 0.5px solid #e0dedef0;
`;

const StTitleImg = styled.img`
  border: 0;
  height: 56px;
  width: 100px;
  text-align: center;
  max-width: 100%;
`;

const StContentBox = styled.div`
  padding: 0px 20px;
  box-sizing: border-box;
  overflow: hidden;
  flex: 1 1 0%;

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
  margin-top: 6px;
  color: rgb(135, 146, 146);
  line-height: 15px;
  font-size: 12px;
  display: flex;

  .nickname {
    margin-left: 12px;
  }
`;
