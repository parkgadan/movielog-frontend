import React, { useState } from "react";
import "./index.css";
import useAxios from "../../hooks/useAxios";

const Profile = (user) => {
  const [changeUser, setChangeUser] = useState({
    userId: user.userId,
    nickname: user.nickname,
  });
  const { sendRequest: sendFormRequest } = useAxios();

  const onChangeNickname = (event) => {
    setChangeUser({
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = () => {
    sendFormRequest({
      method: "POST",
      url: `/user/${user.userId}`,
      data: {
        userId: changeUser.userId,
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
            <button>탈퇴</button>
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
