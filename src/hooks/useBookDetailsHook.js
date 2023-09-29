import { useEffect, useState } from "react";

const useBookDetailsHook = (bookId) => {
  const [bookInfo, setBookInfo] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/book/${bookId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch book information");
        }
        const res = await response.json();
        const data = res.data;

        setBookInfo(data);
        setLoading(false);
        fetchReviews(bookId);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    const fetchReviews = async (bookId) => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/review/book/${bookId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const res = await response.json();
        const data = res.data;
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookData();
  }, [bookId]);

  return { bookInfo, reviews, loading };
};

export default useBookDetailsHook;
