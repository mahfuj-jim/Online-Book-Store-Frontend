import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import BookData from "../../organisms/book_data/book_data";
import Review from "../../organisms/review/review";
import ReviewForm from "../../organisms/review/review_form";
import useBookDetailsHook from "../../../hooks/useBookDetailsHook";
import useReviewSubmitHook from "../../../hooks/useReviewSubmitHook";
import "./book_page.style.css";

const BookPage = () => {
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
      {loading ? <p>Loading...</p> : <BookData bookInfo={bookInfo}></BookData>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Review
          reviews={reviews}
          handleDeleteReview={handleDeleteReview}
        ></Review>
      )}
      <ReviewForm
        userReview={userReview}
        handleSubmit={handleSubmit}
        handleReviewSubmit={handleReviewSubmit}
        errors={errors}
        Controller={Controller}
        control={control}
      ></ReviewForm>
    </div>
  );
};

export default BookPage;
