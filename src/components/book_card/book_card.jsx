/* eslint-disable react/prop-types */
import { useContext } from "react";
import Button from "../elements/button/button";
import { MyContext } from "../../App";
import "./book_card.style.css";

const BookCard = ({ bookId, imageSrc, title, authorName, price, buttonTitle, isRemove }) => {
  const { addBook, removeBook } = useContext(MyContext);

  const handleEvent = () => {
    const book = {
      bookId,
      imageSrc,
      title,
      authorName,
      price,
    };

    isRemove ? removeBook(book): addBook(book);
  };

  return (
    <div className="book-card" onClick={() => console.log("Jim")}>
      <img src={imageSrc} alt={title} width="140" height="211" />
      <h2>{title}</h2>
      <p>Author: {authorName}</p>
      <p>Price: {price}</p>
      <Button
          className={"cart-btn"}
          title={buttonTitle}
          onClick={handleEvent}
        ></Button>
    </div>
  );
};

export default BookCard;
