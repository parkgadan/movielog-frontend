import React, { useEffect, useState } from "react";
import axios from "axios";

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
      {myOrder.map((list) => (
        <li key={list.movie_title}>
          {list.movie_title}
          {list.movie_money}
          {list.purchase_data}
        </li>
      ))}
      <div>{myOrder.movie_title}</div>
      <div>{myOrder.movie_title}</div>
    </>
  );
}

export default MyOrder;
