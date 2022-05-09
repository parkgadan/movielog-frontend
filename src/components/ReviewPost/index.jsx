import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./index.css";

function ReviewPost() {
  const [movieData, setMovieData] = useState([]);
  const [alertMsg, setAlertMsg] = useState("");
  const [write, setWrite] = useState({
    author: "",
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  const dataUrl = "/data/data.json";
  const params = useParams();
  const movieIndex = Number(params.no);
  const movie = movieData.find((movie) => movie.no === movieIndex);

  useEffect(() => {
    // api 호출
    axios.get(dataUrl).then((response) => {
      setMovieData(response.data.data);
    });
  }, []);

  const handleOnChange = (e) => {
    setWrite({
      ...write,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    if (write.title.length < 1 || write.content.length < 1) {
      setAlertMsg("1글자 이상 입력해주세요");
      event.preventDefault();
    } else {
      axios
        .post(
          // 글 등록시 react ==> spring boot 데이터 보내기
          "/board",
          {
            author: write.author,
            title: write.title,
          },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      navigate("/review/posts");
    }
  };

  return (
    <>
      <section className="write">
        <form className="write_form">
          {movie ? (
            <input
              type="text"
              value={movie.title.replace(/[</b>]/gi, "")}
              readOnly
            />
          ) : (
            <></>
          )}
          <input
            type="text"
            name="title"
            value={write.title}
            onChange={handleOnChange}
            placeholder="제목"
          />
          <textarea
            name="content"
            value={write.content}
            onChange={handleOnChange}
            placeholder="내용"
          />
          <div className="write_btn">
            <Link to="/review/posts">
              <button>목록</button>
            </Link>
            <button onClick={handleSubmit}>등록</button>
          </div>
          <div className="write_alert">{alertMsg}</div>
        </form>
      </section>
    </>
  );
}

export default ReviewPost;
