import React, { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";

function Login() {
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });

  const handleUserInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onClickLogin = (event) => {
    event.preventDefault();
    console.log("ID : ", user.userId);
    console.log("PW : ", user.password);
    axios
      .post(
        "/user/login",
        {
          userId: user.userId,
          password: user.password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("res.data.userId :: ", res.data.userId);
        console.log("res.data.msg :: ", res.data.msg);
        if (res.data.code === 200) {
          console.log(res.data);
        } else if (res.data.code === 400) {
          console.log(res.data);
        }
        document.location.href = "/movie";
      })
      .catch((error) => {
        console.log(error);
      });
    setUser({ userId: "", password: "" });
  };

  useEffect(() => {
    axios
      .get("/user/login")
      .then((res) => console.log(res))
      .catch();
  }, []);

  return (
    <>
      <section>
        <form>
          <div className="login_area">
            <div className="loginId">
              <input
                type="text"
                name="userId"
                className="loginBtn_id"
                value={user.userId}
                onChange={handleUserInput}
                placeholder="아이디"
                required
              />
            </div>
            <div className="loginPw">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleUserInput}
                className="loginBtn_pw"
                placeholder="비밀번호"
                required
              />
            </div>
          </div>
          <div className="loginBtn">
            <button type="submit" onClick={onClickLogin}>
              로그인
            </button>
          </div>
        </form>
        <div className="loginBtn">
          <a href="/user/account/signup">
            <button>회원가입</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Login;
