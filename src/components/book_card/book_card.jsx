/* eslint-disable react/prop-types */
import Button from "../elements/button/button";
import "./book_card.style.css";

const BookCard = ({ bookId, imageSrc, title, authorName, price, addBook, removeBook, buttonTitle }) => {
  const handleAddToCart = () => {
    const book = {
      bookId,
      imageSrc,
      title,
      authorName,
      price,
    };

    addBook(book);
  };

  const handleRemoveFromCart = () => {
    console.log("Remove");
    const book = {
      bookId,
      imageSrc,
      title,
      authorName,
      price,
    };

    removeBook(book);
  };

  return (
    <div className="book-card" onClick={() => console.log("Jim")}>
      <img src={imageSrc} alt={title} width="140" height="211" />
      <h2>{title}</h2>
      <p>Author: {authorName}</p>
      <p>Price: {price}</p>
      {buttonTitle === "Remove" ? (
        <Button
          className={"cart-btn"}
          title={buttonTitle}
          onClick={handleRemoveFromCart}
        ></Button>
      ) : (
        <Button
          className={"cart-btn"}
          title={buttonTitle}
          onClick={handleAddToCart}
        ></Button>
      )}
    </div>
  );
};

export default BookCard;
