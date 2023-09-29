import { useState, useEffect } from "react";

const useNewReleaseBooksHook = () => {
  const [booksData, setBooksData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/book/all?page=1&limit=20")
      .then((response) => response.json())
      .then((data) => {
        setBooksData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return { booksData, loading };
};

export default useNewReleaseBooksHook;
