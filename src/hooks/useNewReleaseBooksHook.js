import { useState, useEffect } from "react";

const useNewReleaseBooksHook = (searchKey) => {
  const [booksData, setBooksData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = `http://localhost:8000/api/book/all?page=1&limit=20${
    searchKey ? `&searchKey=${searchKey}` : ""
  }`;

  useEffect(() => {
    const timeOutFunc = setTimeout(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setBooksData(data);
          setLoading(false);
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
