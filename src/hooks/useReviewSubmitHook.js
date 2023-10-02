import axiosInstance from "../utils/axios_instance";

const useReviewSubmitHook = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwNTFiN2U4NDRhYmQxNGRjNWZlZDEwIiwibmFtZSI6Ik1haGZ1aiBBaG1lZCBKaW0iLCJlbWFpbCI6Im1haGZ1ai5qaW0yQGdtYWlsLmNvbSJ9LCJyb2xlIjoidXNlciIsImlhdCI6MTY5NTk3NjUyMiwiZXhwIjoxNjk2MjM1NzIyfQ.RpBCTqwCgy4kVxLK5l_6W8H5JK6f_66fkGB3lFBZIRc";

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
