import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./book_details.style.css";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [bookInfo, setBookInfo] = useState(null);
  const [reviews, setReviews] = useState([]);

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
        fetchReviews(bookId);
      } catch (error) {
        console.error(error);
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

  return (
    <div className="book-details">
      <h2>Book Information:</h2>
      {bookInfo ? (
        <table>
          <tbody>
            <tr>
              <th>Title:</th>
              <td>{bookInfo.title}</td>
            </tr>
            <tr>
              <th>Author:</th>
              <td>{bookInfo.author.name}</td>
            </tr>
            <tr>
              <th>Price:</th>
              <td>{bookInfo.price}</td>
            </tr>
            <tr>
              <th>Summary:</th>
              <td>{bookInfo.summary}</td>
            </tr>
            <tr>
              <th>Published Date:</th>
              <td>{bookInfo.publishedDate}</td>
            </tr>
            <tr>
              <th>Edition:</th>
              <td>{bookInfo.edition}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
      <h2>Reviews:</h2>
      <ul className="review-popup">
        {reviews.map((review) => (
          <li key={review._id}>
            <p>{review.user.name} says:</p>
            <p>{review.review}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetailsPage;
