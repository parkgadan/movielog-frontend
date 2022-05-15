import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function MyOrder() {
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://4f224638-023e-470d-9712-7d4a643f8966.mock.pstmn.io/my/order",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      setMyOrder(response.data.movie_list);
    });
  }, []);

  return (
    <>
      <section className="my_order_box">
        <div className="order_area">
          {myOrder.map((list) => (
            <li key={list.movie_title}>
              <p className="my_order_title">{list.movie_title}</p>
              <div className="my_order_money">
                <p>금액</p>
                {list.movie_money}
              </div>
              <div className="my_order_date">
                <p>구매일자</p>
                {list.purchase_date}
              </div>
              <div className="my_order_status">
                <p>상태</p>
                {list.movie_purchase_status}
              </div>
            </li>
          ))}
        </div>
      </section>
    </>
  );
}

export default MyOrder;
