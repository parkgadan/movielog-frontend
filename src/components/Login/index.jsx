import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Login() {
  const [loginError, setLoginError] = useState("");
  const emailInputRef = useRef();
  const pwInputRef = useRef();
  const navigate = useNavigate();

  const onClickLogin = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = pwInputRef.current.value;

    axios({
      method: "POST",
      url: " /login",
      data: {
        email: enteredEmail,
        password: enteredPassword,
      },
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("로그인 성공");
          navigate("/movie");
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.response.status === 400) {
          setLoginError("아이디 또는 비밀번호를 다시 확인해주세요.");
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
        console.log(error.config);
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
