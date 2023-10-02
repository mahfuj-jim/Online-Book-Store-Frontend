import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios_instance";

const useNewReleaseBooksHook = (searchKey) => {
  const [booksData, setBooksData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = `/book/all?page=1&limit=20${
    searchKey ? `&searchKey=${searchKey}` : ""
  }`;

  const getAllBooks = () => {
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
  };

  useEffect(() => {
    const timeOutFunc = setTimeout(() => {
      getAllBooks();
    }, 800);

    return () => clearTimeout(timeOutFunc);
  }, [searchKey]);

  return { booksData, loading };
};

export default useNewReleaseBooksHook;
