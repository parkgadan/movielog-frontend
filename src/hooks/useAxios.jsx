import { useState, useCallback } from "react";
import axios from "axios";

function useAxios() {
  const [axiosLoading, setAxiosLoading] = useState(false);
  const [axiosError, setAxiosError] = useState(null);
  const [axiosData, setAxiosData] = useState([]);

  const sendRequest = useCallback(async (reqConfig) => {
    setAxiosLoading(true);
    setAxiosError(null);
    try {
      await axios({
        method: reqConfig.method ? reqConfig.method : "GET",
        url: reqConfig.url,
        data: reqConfig.data,
        headers: {
          "Content-type": "application/json",
        },
      }).then((response) => {
        setAxiosData(response.data);
      });
    } catch (error) {
      setAxiosError(error.message);
    }
    setAxiosLoading(false);
  }, []);

  return { axiosLoading, axiosError, sendRequest, axiosData };
}

export default useAxios;
