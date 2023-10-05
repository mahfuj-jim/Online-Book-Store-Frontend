import React from "react";
import TextArea from "../../atoms/elements/text_area/text_area";
import Input from "../../atoms/elements/input/input";
import Button from "../../atoms/elements/button/button";
import "./review_form.style.css";

function ReviewForm({
  userReview,
  handleSubmit,
  handleReviewSubmit,
  errors,
  Controller,
  control,
}) {
  return (
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
              <TextArea
                id="review"
                field={field}
                className={"review-text-area"}
              ></TextArea>
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
              <Input
                type="number"
                id="rating"
                {...field}
                className={"rating-input"}
              ></Input>
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
  );
}

export default ReviewForm;
