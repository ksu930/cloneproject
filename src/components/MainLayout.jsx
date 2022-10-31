import styled from "styled-components";
import React from "react";
import MainHeader from "./MainHeader";

const MainLayout = ({ children }) => {
  return (
    <StLayOut>
      <MainHeader />
      {children}
    </StLayOut>
  );
};

export default MainLayout;
const StLayOut = styled.div`
  background-color: #5383e8;
  width: 100%;
  height: 100%;
`;
