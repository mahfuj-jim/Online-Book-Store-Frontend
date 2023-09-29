// BookDetailsPage.js
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../elements/button/button";
import "./book_details.style.css";
import useBookDetailsHook from "../../hooks/useBookDetailsHook";
import useReviewSubmitHook from "../../hooks/useReviewSubmitHook";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const { bookInfo, reviews, setReviews, loading } = useBookDetailsHook(bookId);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState("");
  const { submitReview, updateReview } = useReviewSubmitHook();

  const userIdToCheck = "65051b7e844abd14dc5fed10";

  const userReview = reviews.find((review) =>
    review.user._id
      ? review.user._id === userIdToCheck
      : review.user === userIdToCheck
  );

  useEffect(() => {
    if (userReview) {
      setNewReview(userReview.review);
      setNewRating(userReview.rating);
    }
  }, [userReview]);

  const handleReviewSubmit = () => {
    if (userReview) {
      updateReview(userReview._id, newReview, newRating)
        .then((updatedReview) => {
          const updatedReviews = reviews.map((review) => {
            if (review._id === updatedReview.data._id) {
              return {
                ...review,
                review: updatedReview.data.review,
                rating: updatedReview.data.rating,
              };
            } else {
              return review;
            }
          });
          setReviews(updatedReviews);
        })
        .catch((error) => {
          console.error("Error updating review:", error);
        });
    } else {
      submitReview(bookId, newReview, newRating)
        .then((newReviewData) => {
          console.log(newReviewData.data);
          setReviews([...reviews, newReviewData.data]);
        })
        .catch((error) => {
          console.error("Error submitting review:", error);
        });
    }
  };

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
      <div className="review-form">
        <h2>{userReview ? "Update Review:" : "Add Review:"}</h2>
        <textarea
          rows="4"
          cols="50"
          placeholder="Write your review here..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={newRating}
          onChange={(e) => setNewRating(e.target.value)}
        />
        <Button
          className={"cart-btn"}
          title={"Submit Review"}
          onClick={handleReviewSubmit}
        ></Button>
      </div>
    </div>
  );
};

export default BookDetailsPage;
