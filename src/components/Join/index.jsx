import React, { useState, useRef, useEffect } from "react";
import Header from "../Header";
import axios from "axios";

function Join() {
  const idInputRef = useRef();
  const pwInputRef = useRef();

  const joinUrl = "/user/account/signup"; // axios Url
  const [joinInput, setJoinInput] = useState({
    userId: "",
    pw: "",
    pwCheck: "",
    email: "",
    nickname: "",
  });
  const [pwAlert, setPwAlert] = useState("");

  const handlePwCheck = () => {
    if (setJoinInput.pw < 1 || setJoinInput.pwCheck < 1) {
      setPwAlert("비밀번호를 입력하세요");
      // 비밀번호가 같다면 일치
    } else if (setJoinInput.pw === setJoinInput.pwCheck) {
      setPwAlert("일치");
      // 비밀번호가 같지 않다면 불일치
    } else {
      setPwAlert("불일치");
    }
  };

  const submitJoin = () => {
    axios
      .post(
        joinUrl(),
        {
          userId: joinInput.userId,
          password: joinInput.pw,
          email: joinInput.email,
          nickname: joinInput.nickname,
        },
        {
          headers: {
            "Content-type": "applicaton/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <Header />
      <section>
        <form onSubmit={submitJoin}>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="아이디"
            required
            ref={idInputRef}
          />
          <input
            type="password"
            name="pw1"
            id="pw1"
            placeholder="비밀번호"
            autoComplete="on"
            required
            ref={pwInputRef}
            onChange={handlePwCheck}
          />
          <input
            type="password"
            name="pw2"
            id="pw2"
            placeholder="비밀번호 확인"
            autoComplete="on"
            required
            onChange={handlePwCheck}
          />
          <span>{pwAlert}</span>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="이메일"
            required
            value={joinInput.email}
          />
          <input
            type="text"
            name="joinName"
            id="joinName"
            placeholder="닉네임"
            required
          />
          <div className="joinBtn_area">
            <button type="submit" id="joinBtn">
              회원 가입
            </button>
          </div>
        </form>
        <div>
          이미 가입 하셨나요?<a href="#login">로그인</a>
        </div>
      </section>
    </>
  );
}

export default Join;
