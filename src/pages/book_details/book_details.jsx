import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../../components/elements/button/button";
import "./book_details.style.css";
import useBookDetailsHook from "../../hooks/useBookDetailsHook";
import useReviewSubmitHook from "../../hooks/useReviewSubmitHook";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const { bookInfo, reviews, setReviews, loading } = useBookDetailsHook(bookId);
  const { submitReview, updateReview, deleteReview } = useReviewSubmitHook();

  const userIdToCheck = "65051b7e844abd14dc5fed10";

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      review: "",
      rating: "",
    },
  });

  const userReview = reviews.find((review) =>
    review.user._id
      ? review.user._id === userIdToCheck
      : review.user === userIdToCheck
  );

  useEffect(() => {
    if (userReview) {
      setValue("review", userReview.review);
      setValue("rating", userReview.rating);
    }
  }, [setValue, userReview]);

  const handleReviewSubmit = () => {
    const newReview = getValues("review");
    const newRating = getValues("rating");

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

  const handleDeleteReview = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (!confirmation) {
      return;
    }

    deleteReview(userReview._id)
      .then(() => {
        const updatedReviews = reviews.filter(
          (review) => review._id !== userReview._id
        );
        setReviews(updatedReviews);

        // setNewReview("");
        // setNewRating("");

        setValue("review", "");
        setValue("rating", "");
      })
      .catch((error) => {
        console.error("Error updating review:", error);
      });
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
      <div className="review-form">
        <h2>{userReview ? "Update Review:" : "Add Review:"}</h2>
        <form onSubmit={handleSubmit(handleReviewSubmit)}>
          <div className="form-group">
            <label htmlFor="review">Review</label>
            {errors.review && (
              <p className="error-message">Please enter a valid review.</p>
            )}
            <Controller
              name="review"
              control={control}
              defaultValue={userReview ? userReview.review : ""}
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <textarea
                  id="review"
                  {...field}
                  className={errors.review ? "error" : ""}
                />
              )}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating (1-5)</label>
            {errors.rating && (
              <p className="error-message">
                Please enter a valid rating between 1 and 5.
              </p>
            )}
            <Controller
              name="rating"
              control={control}
              defaultValue={userReview ? userReview.rating : ""}
              rules={{
                required: true,
                min: 1,
                max: 5,
              }}
              render={({ field }) => (
                <input
                  type="number"
                  id="rating"
                  {...field}
                  className={errors.rating ? "error" : ""}
                />
              )}
            />
          </div>
          <Button
            className={"cart-btn"}
            title={"Submit Review"}
            type="submit"
          ></Button>
        </form>
      </div>
    </div>
  );
};

export default BookDetailsPage;
