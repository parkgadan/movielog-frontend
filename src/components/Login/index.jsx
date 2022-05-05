import React from "react";
import Header from "../Header";
import "./index.css";

function Login() {
  return (
    <>
      <Header />
      <section>
        <form>
          <div className="login_area">
            <div className="loginId">
              <input
                type="text"
                name="id"
                id="id"
                className="loginBtn_id"
                placeholder="아이디"
                required
              />
            </div>
            <div className="loginPw">
              <input
                type="password"
                name="pw"
                id="pw"
                className="loginBtn_pw"
                placeholder="비밀번호"
                required
              />
            </div>
          </div>
          <div className="loginBtn">
            <button type="submit">로그인</button>
            <button type="submit">회원가입</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
