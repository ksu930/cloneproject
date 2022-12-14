import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunityPage from "../page/CommunityPage";
import DetailPage from "../page/DetailPage";
import LoginPage from "../page/LoginPage";
import MainPage from "../page/MainPage";
import SignupPage from "../page/SignupPage";
import WritePage from "../page/WritePage";
import { loginState } from "../redux/modules/userSlice";

const Router = () => {
  const dispatch = useDispatch();
  if (sessionStorage.getItem("Access_Token")) {
    dispatch(loginState());
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/write/:id" element={<WritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
