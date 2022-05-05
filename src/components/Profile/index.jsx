import React from "react";
import Header from "../Header";

function Profile() {
  return (
    <>
      <Header />
      <section>
        <form>
          <div id="loginId" className="login_form">
            <h3>아이디</h3>
            <input
              type="text"
              name="id"
              id="id"
              className="loginBtn_id"
              required
            />
          </div>
          <div id="loginPw" className="login_form">
            <h3>이메일</h3>
            <input
              type="password"
              name="pw"
              id="pw"
              className="loginBtn_pw"
              required
            />
          </div>
          <div id="loginPw" className="login_form">
            <h3>닉네임</h3>
            <input
              type="password"
              name="pw"
              id="pw"
              className="loginBtn_pw"
              required
            />
          </div>
          <button type="submit" id="loginBtn_login" className="login_btns">
            수정
          </button>
          <button type="submit" id="loginBtn_join" className="login_btns">
            탈퇴
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
