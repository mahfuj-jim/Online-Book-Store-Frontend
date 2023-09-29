const useReviewSubmitHook = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwNTFiN2U4NDRhYmQxNGRjNWZlZDEwIiwibmFtZSI6Ik1haGZ1aiBBaG1lZCBKaW0iLCJlbWFpbCI6Im1haGZ1ai5qaW0yQGdtYWlsLmNvbSJ9LCJyb2xlIjoidXNlciIsImlhdCI6MTY5NTk3NjUyMiwiZXhwIjoxNjk2MjM1NzIyfQ.RpBCTqwCgy4kVxLK5l_6W8H5JK6f_66fkGB3lFBZIRc";

  const submitReview = (bookId, newReview, newRating) => {
    const newReviewData = {
      book: bookId,
      review: newReview,
      rating: parseInt(newRating, 10),
    };

    return fetch("http://localhost:8000/api/review/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newReviewData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit review");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });
  };

  const updateReview = (reviewId, updatedReview, updatedRating) => {
    const updatedReviewData = {
      reviewId: reviewId,
      review: updatedReview,
      rating: parseInt(updatedRating, 10),
    };

    return fetch("http://localhost:8000/api/review/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedReviewData),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error("Failed to update review");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error updating review:", error);
      });
  };

  return { submitReview, updateReview };
};

export default useReviewSubmitHook;
