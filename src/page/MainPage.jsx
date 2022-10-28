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
              <div>1</div>
              <div>사진</div>
              <div>멍청한 사람과 논쟁하는 느낌[40]</div>
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
`;

const StArticle = styled.div`
  border-bottom: 0.5px solid #e0dedef0;
`;
