import React, { useState, useRef } from "react";
import api from "../../api";

import "./index.css";

function Login({ setNickname }) {
  const [loginError, setLoginError] = useState("");
  const emailInputRef = useRef();
  const pwInputRef = useRef();

  const onClickLogin = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = pwInputRef.current.value;
    api.postLogin(enteredEmail, enteredPassword, ({ nickname, error }) => {
      console.log(nickname, error);
      if (error) {
        setLoginError("아이디 또는 비밀번호를 다시 확인해주세요.");
      }

      setNickname(nickname);
    });
  };

  return (
    <>
      <section className="login_page">
        <form onSubmit={onClickLogin}>
          <div className="login_area">
            <div className="loginId">
              <input
                type="text"
                name="userId"
                className="loginBtn_id"
                ref={emailInputRef}
                placeholder="아이디"
                required
              />
            </div>
            <div className="loginPw">
              <input
                type="password"
                name="password"
                ref={pwInputRef}
                className="loginBtn_pw"
                placeholder="비밀번호"
                required
              />
            </div>
          </div>
          <div className="login_error">{loginError}</div>
          <div className="loginBtn">
            <button type="submit" onClick={onClickLogin}>
              로그인
            </button>
          </div>
        </form>
        <div className="loginBtn">
          <a href="/user/account/signup">회원가입 </a>
        </div>
      </section>
    </>
  );
}

export default Login;
