// BookDetailsPage.js
import { useParams } from "react-router-dom";
import "./book_details.style.css";
import useBookDetailsHook from "../../hooks/useBookDetailsHook";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const { bookInfo, reviews, loading } = useBookDetailsHook(bookId);

  return (
    <div className="book-details">
      <h2>Book Information:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
