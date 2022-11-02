import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  loginState,
  logoutState,
  __loginUser,
} from "../redux/modules/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);
  const initialState = {
    email: "",
    password: "",
  };

  const [loginUser, setLoginUser] = useState(initialState);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
      dispatch(loginState());
    } else {
      navigate("/login");
      dispatch(logoutState());
    }
    // eslint-disable-next-line
  }, [isLogin]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(__loginUser(loginUser));
  };
  return (
    <StLayOut>
      <StLoginBox>
        <div className="loginBox">
          <div className="smallBox">
            <div>
              <h1 className="logoBox">
                <StLogo
                  onClick={() => navigate("/")}
                  src="https://member.op.gg/img_opgglogo.1924961d.svg"
                />
              </h1>
            </div>
            <form>
              <StH2>간편 로그인</StH2>
              <StFaceButton>
                <span>
                  <StFaceImg src="https://member.op.gg/icon_facebook_wh.6ab689d7.svg"></StFaceImg>
                  <span className="faceSpan">페이스북으로 로그인</span>
                </span>
              </StFaceButton>
              <StAppleButton>
                <span>
                  <StAppleImg src="https://member.op.gg/logo_apple.dca28233.svg" />
                  <span className="appleSpan">Apple로 로그인</span>
                </span>
              </StAppleButton>
              <StLoginLine>
                <span className="line">OR</span>
              </StLoginLine>
              <StLoginEmail>이메일 로그인</StLoginEmail>
              <div>
                <StId>
                  <input
                    type="text"
                    name="email"
                    value={loginUser.email}
                    onChange={onChangeHandler}
                    placeholder="이메일 주소"
                  />
                </StId>
              </div>
              <div>
                <StId>
                  <input
                    name="password"
                    value={loginUser.password}
                    onChange={onChangeHandler}
                    type="password"
                    autoComplete="off"
                    placeholder="비밀번호"
                  />
                </StId>
              </div>
              <StLoginCheck>
                <div>
                  <span className=" member__Checkbox ">
                    <input className="checkbox" type="checkbox" />
                  </span>
                  <label>로그인 상태 유지하기</label>
                </div>
              </StLoginCheck>
              {loginUser.password.trim() === "" ? (
                <StLoginTrimButton onClick={onSubmit}>로그인</StLoginTrimButton>
              ) : (
                <button className="PwTrimButton" disabled="disabled">
                  로그인
                </button>
              )}
              <StSignUp>
                OP.GG에 처음이세요?
                <span>
                  <a onClick={() => navigate("/signup")}>회원가입하기</a>
                </span>
              </StSignUp>
            </form>
          </div>
        </div>
      </StLoginBox>
    </StLayOut>
  );
};
export default LoginPage;

const StLayOut = styled.div`
  position: relative;
  min-height: 100%;
  background-color: #f3f5f7;
`;

const StLoginBox = styled.div`
  position: relative;
  min-width: 320px;
  min-height: 100%;
  padding: 120px 0 170px;
  .loginBox {
    position: relative;
    margin: 0 auto;
    width: 450px;
    min-height: 682px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  }
  .smallBox {
    margin: 0 40px;
    padding-bottom: 40px;
  }
  .logoBox {
    padding-top: 48px;
    text-align: center;
    margin-bottom: 42px;
  }
`;

const StLogo = styled.img`
  width: 128px;
  height: 32px;
  cursor: pointer;
`;

const StH2 = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const StFaceButton = styled.button`
  margin-top: 12px;
  width: 100%;
  background-color: #3c5a99;
  line-height: 20px;
  font-size: 16px;
  border-radius: 3px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 0;
  height: 56px;

  .faceSpan {
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #fff;
    display: inline-block;
    vertical-align: top;
    margin-top: 4px;
  }
`;

const StFaceImg = styled.img`
  display: inline-block;
  margin-right: 16px;
`;

const StAppleButton = styled.button`
  margin-top: 12px;
  width: 100%;
  background-color: #212529;
  line-height: 20px;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 3px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 0;
  height: 56px;
  .appleSpan {
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #fff;
    display: inline-block;
    vertical-align: top;
    margin-top: 4px;
  }
`;
const StAppleImg = styled.img`
  display: inline-block;
  margin-right: 16px;
  width: 24px;
  aspect-ratio: auto 24 / 24;
  height: 24px;
`;

const StLoginLine = styled.div`
  position: relative;
  margin-top: 24px;
  font-weight: 400;
  font-size: 12px;
  color: #c5cbd0;
  text-align: center;
  vertical-align: top;
  line-height: 14px;

  .line::before {
    position: absolute;
    top: 6px;
    content: "";
    display: block;
    width: 160px;
    height: 1px;
    background-color: #dddfe4;
    margin-left: 210px;
  }
  .line::after {
    position: absolute;
    top: 6px;
    content: "";
    display: block;
    width: 160px;
    height: 1px;
    background-color: #dddfe4;
  }
`;

const StLoginEmail = styled.h2`
  margin-top: 42px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const StId = styled.div`
  margin-top: 27px;
  position: relative;
  padding: 10px 0 11px;
  border-bottom: 1px solid #dddfe4;
  input {
    position: relative;
    z-index: 10;
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    width: 100%;
    ::placeholder {
      color: #7b858e;

      bottom: 3px;
      left: 0;
      top: 11px;
      transform-origin: bottom left;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

const StLoginCheck = styled.div`
  position: relative;
  div {
    float: left;
    margin-top: 16px;
  }
  span {
    position: relative;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    width: 22px;
    height: 22px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #dddfe4;
  }
  .checkbox {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    outline: 0;
    -webkit-appearance: none;
    margin: 0;
    cursor: pointer;
  }
  .member__Checkbox::after {
    position: absolute;
    left: 5px;
    top: 5px;
    content: "";
    display: block;
    width: 13px;
    height: 10px;
    background: url(https://member.op.gg/icon_check_bl.10732f6d.svg) no-repeat 0
      0;
  }
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #52595f;
    margin-left: 8px;
    margin-top: 4px;
    line-height: 17px;
    display: inline-block;
  }
  .PwTrimButton {
  }
`;

const StLoginButton = styled.button`
  font-size: 16px;
  border-radius: 3px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 0;
  height: 56px;
  margin-top: 40px;
  width: 100%;
  position: relative;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  background-color: #1ea1f7;
  font-weight: 700;
  cursor: pointer;
  line-height: 56px;
  padding: 0 20px;
`;

const StLoginTrimButton = styled.button`
  font-size: 16px;
  border-radius: 3px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 0;
  height: 56px;
  margin-top: 40px;
  width: 100%;
  position: relative;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  background-color: #dddfe4;
  font-weight: 700;
  cursor: default;
  line-height: 56px;
  padding: 0 20px;
`;

const StSignUp = styled.div`
  position: relative;
  text-align: center;
  margin-top: 16px;

  span {
    margin-left: 12px;
  }
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1ea1f7;
    text-decoration: underline;
    cursor: pointer;
  }
`;
