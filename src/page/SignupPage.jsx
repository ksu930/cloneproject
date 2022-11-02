import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  overlapEmailCheck,
  overlapNameCheck,
  __addUsers,
  __nameCheck,
  __emailCheck,
} from "../redux/modules/userSlice";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
    name: "",
  };

  const { overlapEmail, overlapName } = useSelector((state) => state.user);
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [emailState, setEmailState] = useState(false);
  const [user, setUser] = useState(initialState);

  const regPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
  const regEmail =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //이메일 중복검사
  const EmailCk = () => {
    if (emailCheck === true) {
      setEmailState(true);
      dispatch(__emailCheck({ email: user.email }));
    }
  };

  //닉네임 중복검사
  const NameCk = () => {
    // if (user.name.trim() === "") {
    //   //alert("닉네임을 입력해주세요!") 밑에 경고문 띄우기
    // }
    dispatch(__nameCheck({ name: user.name }));
  };

  useEffect(() => {
    if (regEmail.test(user.email)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
    dispatch(overlapEmailCheck());
    // eslint-disable-next-line
  }, [user.email]);

  useEffect(() => {
    if (regPw.test(user.password)) {
      setPwCheck(true);
    } else {
      setPwCheck(false);
    }
    // eslint-disable-next-line
  }, [user.password]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!pwCheck) {
      alert("비밀번호를 형식에 맞게 입력해주세요.");
    } else if (!emailCheck) {
      alert("이메일을 형식에 맞게 입력해주세요.");
    }
    dispatch(
      __addUsers({
        email: user.email,
        password: user.password,
        name: user.name,
      })
    );
    setUser(initialState);
  };

  return (
    <StBody>
      <StRoot>
        <div>
          <div className="layout">
            <div className="layoutBackground">
              <div className="layoutInner">
                <div className="header">
                  <h1 className="Logo">
                    <StImg
                      onClick={() => navigate("/")}
                      src="https://member.op.gg/img_opgglogo.1924961d.svg"
                    ></StImg>
                  </h1>
                </div>
                <form>
                  <div>
                    <h2 className="signUpTitle">기본정보입력</h2>
                    <div className="signUpSub">
                      회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기
                      전까지 회원가입이 완료가 되지 않습니다.
                    </div>
                    <div className="inputState">
                      <input
                        onBlur={EmailCk}
                        className="idInput"
                        type="text"
                        autoComplete="off"
                        name="email"
                        value={user.email}
                        onChange={onChangeHandler}
                        placeholder="이메일 주소"
                      ></input>
                    </div>
                    <StNameInput>
                      <div>
                        {user.email.trim() === "" ? null : emailState ? (
                          overlapEmail ? (
                            <div style={{ color: "blue" }}>
                              사용 가능한 이메일입니다.
                            </div>
                          ) : (
                            <StErrorMassage>
                              <StDangerImg src="https://member.op.gg/icon_alert.953d9b77.svg" />
                              이미 사용중인 이메일 입니다.
                            </StErrorMassage>
                          )
                        ) : emailCheck ? (
                          <div style={{ color: "blue" }}>
                            형식에 맞는 이메일 입니다.
                          </div>
                        ) : (
                          <StErrorMassage>
                            <StDangerImg src="https://member.op.gg/icon_alert.953d9b77.svg" />
                            이메일이 형식에 맞지 않습니다.
                          </StErrorMassage>
                        )}
                      </div>
                      <div className="inputState">
                        <input
                          onBlur={NameCk}
                          className="IdInput"
                          type="text"
                          name="name"
                          value={user.name}
                          onChange={onChangeHandler}
                          placeholder="닉네임"
                        />
                      </div>
                    </StNameInput>
                    {user.name.trim() === "" ? (
                      <div className="SignUpMsg">
                        개인정보를 기입하여 발생될 수 있는 피해는 OP.GG가 일절
                        책임지지 않습니다.
                      </div>
                    ) : overlapName ? (
                      <div>
                        <StDangerImg />
                        사용 할 수 있는 닉네임입니다.
                      </div>
                    ) : (
                      <StErrorMassage>
                        <StDangerImg src="https://member.op.gg/icon_alert.953d9b77.svg" />
                        이미 사용중인 닉네임입니다.
                      </StErrorMassage>
                    )}
                    <div>
                      <StPwBox>
                        <input
                          type="password"
                          name="password"
                          value={user.password}
                          onChange={onChangeHandler}
                          placeholder="비밀번호"
                        />
                      </StPwBox>
                      <div>
                        {user.password.trim() === "" ? null : pwCheck ? (
                          <div style={{ color: "blue" }}>
                            올바른 비밀번호입니다.
                          </div>
                        ) : (
                          <StErrorMassage>
                            <StDangerImg src="https://member.op.gg/icon_alert.953d9b77.svg" />
                            비밀번호가 형식에 맞지 않습니다.
                          </StErrorMassage>
                        )}
                      </div>

                      <StSignUpButtonBox>
                        <button
                          className="canCle"
                          onClick={() => navigate("/login")}
                        >
                          취소
                        </button>
                        <button className="signUpBtn" onClick={onSubmit}>
                          가입하기
                        </button>
                      </StSignUpButtonBox>
                    </div>
                  </div>
                </form>
                <StLoginPlace>
                  이미 회원이신가요?
                  <a onClick={() => navigate("/login")}>로그인하기</a>
                </StLoginPlace>
              </div>
            </div>
          </div>
        </div>
      </StRoot>
    </StBody>
  );
};
export default SignupPage;

const StBody = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 1;
`;

const StRoot = styled.div`
  position: relative;
  min-height: 100%;
  background-color: #f3f5f7;

  .layout {
    min-width: 320px;
    min-height: 700px;
    background-color: #f3f5f7;
    height: 1080px;
    margin: 0 auto;
    width: 1920px;
  }
  .layoutBackground {
    position: absolute;
    width: 610px;
    left: 50%;
    top: 0;
    bottom: 0;
    margin-left: -305px;
    background-color: #fff;
  }
  .layoutInner {
    position: relative;
    margin: 0 80px;
    padding-bottom: 88px;
  }
  .header {
    padding-top: 88px;
    padding-bottom: 56px;
  }
  .Logo {
    text-align: center;
  }
  .signUpTitle {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }
  .signUpSub {
    margin-top: 12px;
    padding: 16px;
    background-color: #f3f5f7;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #52595f;
    margin-bottom: 32px;
    word-break: keep-all;
  }
  .inputState {
    margin-top: 27px;
    position: relative;
    padding: 10px 0 11px;
    border-bottom: 1px solid #dddfe4;
  }
  .idInput {
    position: relative;
    z-index: 10;
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: 0;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      width: 100%;
      color: #7b858e;
      bottom: 3px;
      left: 0;
      top: 11px;
      transform-origin: bottom left;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: color, bottom, transform;
    }
  }
  .SignUpMsg {
    position: relative;
    color: #98a0a7;
    margin-top: 8px;
    font-size: 14px;
    line-height: 20px;
  }
`;
const StImg = styled.img`
  width: 190px;
  height: 48px;
  cursor: pointer;
`;

const StErrorMassage = styled.div`
  color: red;
  margin-top: 5px;
`;
const StDangerImg = styled.img`
  width: 14px;
  margin-right: 5px;
`;

const StNameInput = styled.div`
  .inputState {
    margin-top: 27px;
    position: relative;
    padding: 10px 0 11px;
    border-bottom: 1px solid #dddfe4;
  }
  .IdInput {
    position: relative;
    z-index: 10;
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: 0;

    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      width: 100%;
      color: #7b858e;

      bottom: 3px;
      left: 0;
      top: 11px;
      transform-origin: bottom left;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: color, bottom, transform;
    }
  }
`;
const StPwBox = styled.div`
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
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      width: 100%;
      color: #7b858e;
      bottom: 3px;
      left: 0;
      top: 11px;
      transform-origin: bottom left;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: color, bottom, transform;
    }
  }
`;
const StSignUpButtonBox = styled.div`
  margin-top: 40px;
  content: "";
  display: block;
  clear: both;
  .signUpBtn {
    font-size: 16px;
    border-radius: 3px;
    text-decoration: none;
    color: #fff;
    border: 0;
    height: 56px;
    position: relative;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    background-color: #1ea1f7;
    font-weight: 700;
    cursor: pointer;
    line-height: 56px;
    padding: 0 20px;
    float: right;
    width: 217px;
  }
  .canCle {
    background-color: #fff;
    color: #1e2022;
    border: 1px solid #dddfe4;
    font-weight: 400;
    font-size: 16px;
    border-radius: 3px;
    text-decoration: none;
    float: left;
    width: 217px;
    height: 56px;
    cursor: pointer;
  }
`;
const StLoginPlace = styled.div`
  margin-top: 100px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 60px;
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1ea1f7;
    text-decoration: underline;
    padding: 0;
    background-color: transparent;
    border: 0;
    margin-left: 12px;
    cursor: pointer;
  }
`;
