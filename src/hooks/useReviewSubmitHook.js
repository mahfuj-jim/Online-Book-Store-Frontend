import axiosInstance from "../utils/axios_instance";

const useReviewSubmitHook = (token) => {

  const submitReview = (bookId, newReview, newRating) => {
    const newReviewData = {
      book: bookId,
      review: newReview,
      rating: parseInt(newRating, 10),
    };

    return axiosInstance
      .post("/review/add", newReviewData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error submitting review:", error);
        throw error;
      });
  };

  const updateReview = (reviewId, updatedReview, updatedRating) => {
    const updatedReviewData = {
      reviewId: reviewId,
      review: updatedReview,
      rating: parseInt(updatedRating, 10),
    };

    return axiosInstance
      .put("/review/update", updatedReviewData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error updating review:", error);
        throw error;
      });
  };

  const deleteReview = (reviewId) => {
    const requestBody = {
      reviewId: reviewId,
    };

    return axiosInstance
      .delete(`/review/delete/`, {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
        data: requestBody,
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error deleting review:", error);
        throw error;
      });
  };

  return { submitReview, updateReview, deleteReview };
};

export default useReviewSubmitHook;
