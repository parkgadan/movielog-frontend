import React, { useState } from "react";
import "./index.css";
import useAxios from "../../hooks/useAxios";
import axios from "axios";

const Profile = (user) => {
  const [changeUser, setChangeUser] = useState({
    userId: user.token,
    nickname: user.nickname,
  });
  const { sendRequest: sendFormRequest } = useAxios();

  const onChangeNickname = (event) => {
    setChangeUser({
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: "/api/user",
      data: {
        userId: changeUser.userId,
      },
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const handleChange = () => {
    sendFormRequest({
      method: "POST",
      url: "/api/user/me",
      data: {
        nickname: changeUser.nickname,
      },
    });
  };

  return (
    <>
      <section className="profile">
        <form>
          <div className="profile_box">
            <label htmlFor="inputUserId">아이디</label>
            <input
              type="text"
              value={changeUser.userId}
              id="inputUserId"
              readOnly
            />
          </div>
          <div className="profile_box">
            <label htmlFor="inputNickname">닉네임</label>
            <input
              type="text"
              id="inputNickname"
              value={changeUser.nickname}
              onChange={onChangeNickname}
            />
          </div>
          <div className="joinBtn_area">
            <button onClick={handleDelete}>탈퇴</button>
            <button type="submit" onClick={handleChange}>
              수정
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;
