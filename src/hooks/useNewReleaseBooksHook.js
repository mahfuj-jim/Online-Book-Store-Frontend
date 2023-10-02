import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios_instance";

const useNewReleaseBooksHook = (searchKey) => {
  const [booksData, setBooksData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = `/book/all?page=1&limit=20${
    searchKey ? `&searchKey=${searchKey}` : ""
  }`;

  useEffect(() => {
    const timeOutFunc = setTimeout(() => {
      axiosInstance
        .get(apiUrl)
        .then((response) => response.data)
        .then((data) => {
          setBooksData(data);
          setLoading(false);

          return data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timeOutFunc);
  }, [apiUrl]);

  return { booksData, loading };
};

export default useNewReleaseBooksHook;
