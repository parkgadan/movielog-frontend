import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./index.css";

function ReviewWrite() {
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
    axios({
      method: "GET",
      url: "https://4f224638-023e-470d-9712-7d4a643f8966.mock.pstmn.io/movie",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
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
          "/review/posts",
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
          if (response.data.code === 200) {
            console.log(response);
          }
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

export default ReviewWrite;
