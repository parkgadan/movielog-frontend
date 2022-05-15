import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import MovieDetail from "./components/MovieDetail";
import MovieOrder from "./components/MovieOrder";
import Login from "./components/Login";
import Join from "./components/Join";
import My from "./components/My";
import MyOrder from "./components/MyOrder";
import MyReview from "./components/MyReview";
import ReviewBoard from "./components/ReviewBoard";
import ReviewWrite from "./components/ReviewWrite";
import Profile from "./components/Profile";

function App() {
  const [nickname, setNickname] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setNickname(localStorage.getItem("nickname"));
    setUserId(localStorage.getItem("userId"));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Header nickname={nickname} userId={userId} />}>
        <Route path="movie" element={<Main />} />
        <Route path="movie/:no" element={<MovieDetail nickname={nickname} />} />
        <Route path="movie/:no/write" element={<ReviewWrite />} />
        <Route path="movie/order/:no" element={<MovieOrder />} />
        <Route
          path="user"
          element={<Profile nickname={nickname} userId={userId} />}
        />
        <Route
          path="user/login"
          element={<Login setNickname={setNickname} setUserId={setUserId} />}
        />
        <Route path="my" element={<My />}>
          <Route path="order" element={<MyOrder />} />
          <Route path="review" element={<MyReview userId={userId} />} />
        </Route>
        <Route path="review" element={<ReviewBoard />} />
        <Route path="join" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
