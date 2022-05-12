import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useInput from "../../hooks/useInput";
import "./index.css";

function Join() {
  let formIsValid = false;
  const [idCheck, setIdCheck] = useState("");
  const navigate = useNavigate();

  const {
    value: inputEmail,
    isValid: inputEmailIsValid,
    hasError: emailInputHasError,
    handleValueChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@" && "."));

  const {
    value: inputPw,
    isValid: inputPwIsValid,
    hasError: pwInputHasError,
    handleValueChange: handlePwChange,
    handleInputBlur: handlePwBlur,
    reset: resetPwInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: inputPwReEnter,
    hasError: pwReEnterInputHasError,
    handleValueChange: handlePwReEnterChange,
    handleInputBlur: handlePwReEnterBlur,
    reset: resetPwReEnterInput,
  } = useInput((value) => value === inputPw);

  const {
    value: inputNickName,
    isValid: inputNickNameIsValid,
    hasError: nickNameInputHasError,
    handleValueChange: handleNickNameChange,
    handleInputBlur: handleNickNameBlur,
    reset: resetNickNameInput,
  } = useInput((value) => value.trim() !== "");

  if (inputEmailIsValid && inputPwIsValid && inputNickNameIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    // 아이디 중복 체크 api 호출
    axios.get("/join/chk-duplicate").catch((error) => {
      if (error.response.data === 400) {
        setIdCheck("중복된 아이디입니다.");
      }
    });
  }, [inputEmail]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!inputEmailIsValid) {
      return;
    }
    resetEmailInput();
    resetPwInput();
    resetNickNameInput();
    resetPwReEnterInput();
  };

  const handleSendForm = () => {
    axios({
      method: "POST",
      url: " /join",
      data: {
        userId: "",
        email: inputEmail,
        password: inputPw,
        nickname: inputNickName,
      },
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("회원가입 성공");
          navigate("/login");
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
        console.log(error.config);
      });
  };

  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const pwInputClass = pwInputHasError
    ? "form-control invalid"
    : "form-control";

  const pwReEnterInputClass = pwReEnterInputHasError
    ? "form-control invalid"
    : "from-control";

  const nickNameInputClass = nickNameInputHasError
    ? "form-control invalid"
    : "from-control";

  return (
    <>
      <section className="join">
        <form onSubmit={formSubmitHandler}>
          <div className={emailInputClass}>
            <input
              type="text"
              id="email"
              placeholder="이메일"
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              value={inputEmail}
            />
          </div>
          {emailInputHasError && (
            <p className="error_msg">이메일을 입력하세요.</p>
          )}
          {idCheck}
          <div className={pwInputClass}>
            <input
              type="password"
              id="pw1"
              placeholder="비밀번호"
              onChange={handlePwChange}
              onBlur={handlePwBlur}
              value={inputPw}
              autoComplete="on"
            />
          </div>
          {pwInputHasError && (
            <p className="error_msg">비밀번호를 입력하세요.</p>
          )}
          <div className={pwReEnterInputClass}>
            <input
              type="password"
              id="pw2"
              placeholder="비밀번호 확인"
              autoComplete="on"
              onChange={handlePwReEnterChange}
              onBlur={handlePwReEnterBlur}
              value={inputPwReEnter}
            />
          </div>
          {pwReEnterInputHasError && (
            <p className="error_msg">비밀번호를 다시 확인해주세요.</p>
          )}
          <div className={nickNameInputClass}>
            <input
              type="text"
              id="joinName"
              placeholder="닉네임"
              onChange={handleNickNameChange}
              onBlur={handleNickNameBlur}
              value={inputNickName}
            />
          </div>
          {nickNameInputHasError && (
            <p className="error_msg">닉네임을 입력하세요.</p>
          )}
          <div className="joinBtn_area">
            <button
              type="submit"
              disabled={!formIsValid}
              onClick={handleSendForm}
            >
              회원 가입
            </button>
          </div>
        </form>
        <div className="login_guide">
          이미 가입 하셨나요? <a href="/user/login">로그인</a>
        </div>
      </section>
    </>
  );
}
export default Join;
