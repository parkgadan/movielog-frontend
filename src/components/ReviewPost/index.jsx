import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./index.css";

function ReviewPost() {
  const [movieData, setMovieData] = useState([]);
  const [alertMsg, setAlertMsg] = useState("");
  const [write, setWrite] = useState({
    movieId: "",
    title: "",
    content: "",
  });
  const navigate = useNavigate();
  const [alertTitle, setAlertTitle] = useState(false);
  const [alertContent, setAlertContent] = useState(false);

  const params = useParams();
  const movieIndex = Number(params.no);
  const movie = movieData.find((movie) => movie.no === movieIndex);

  useEffect(() => {
    // api 호출
    axios.get("/data/data.json").then((response) => {
      if (response.data.code === 200) {
        console.log(response.data);
      } else if (response.data.code === 400) {
        console.log(response.data);
      }
    });
  }, []);

  const handleOnChange = (e) => {
    setWrite({
      ...write,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    if (write.title.length < 1 && write.content.length < 1) {
      setAlertTitle(true);
      setAlertContent(true);
      setAlertMsg("1글자 이상 입력해주세요");
      event.preventDefault();
    } else if (write.title.length < 1) {
      setAlertTitle(true);
      setAlertMsg("1글자 이상 입력해주세요");
      event.preventDefault();
    } else if (write.content.length < 1) {
      setAlertContent(true);
      setAlertMsg("1글자 이상 입력해주세요");
      event.preventDefault();
    } else {
      axios
        .post(
          // api 전송
          "https://9dab5aff-3579-49cc-ba12-859174ed7513.mock.pstmn.io/posts",
          {
            data: {
              email: "",
              movieId: movie.no,
              title: write.title,
              content: write.content,
            },
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
      event.preventDefault();
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
              className="no_alert"
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
            className={alertTitle ? "alert" : "no_alert"}
            placeholder="제목"
          />
          <textarea
            name="content"
            value={write.content}
            onChange={handleOnChange}
            className={alertContent ? "alert" : "no_alert"}
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
