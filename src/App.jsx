import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import MovieDetail from "./components/MovieDetail";
import Login from "./components/Login";
import Join from "./components/Join";
import My from "./components/My";
import ReviewBoard from "./components/ReviewBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="movie" element={<Main />} />
        <Route path="movie/:movieId" element={<MovieDetail />} />
        <Route path="user/login" element={<Login />} />
        <Route path="my" element={<My />} />
        <Route path="review/posts" element={<ReviewBoard />} />
        <Route path="user/account/signup" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
