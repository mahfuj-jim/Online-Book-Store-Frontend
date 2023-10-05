import React from "react";
import Button from "../../atoms/elements/button/button";
import "./review.style.css";

function Review({ reviews, handleDeleteReview }) {
  const userIdToCheck = "65051b7e844abd14dc5fed10";

  return (
    <div className="review-container">
      <h2>Reviews:</h2>
      <ul className="review-popup">
        {reviews.map((review) => (
          <li key={review._id}>
            <p>{review.user.name} says:</p>
            <p>{review.review}</p>
            <p>Rating: {review.rating}</p>
            {review.user._id === userIdToCheck && (
              <Button
                className={"cart-btn"}
                title={"Delete Review"}
                onClick={handleDeleteReview}
              ></Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Review;
