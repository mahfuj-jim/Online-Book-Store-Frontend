/* eslint-disable react/prop-types */
import { useContext } from "react";
import Button from "../elements/button/button";
import { MyContext } from "../../pages/home_page/home_page";
import { Link } from "react-router-dom";
import "./book_card.style.css";

const BookCard = ({
  bookId,
  imageSrc,
  title,
  authorName,
  price,
  buttonTitle,
  isRemove,
}) => {
  const { addBook, removeBook } = useContext(MyContext);

  const handleEvent = () => {
    const book = {
      bookId,
      imageSrc,
      title,
      authorName,
      price,
    };

    isRemove ? removeBook(book) : addBook(book);
  };

  return (
    <div className="book-card">
      <Link to={`/book/${bookId}`}>
        <img src={imageSrc} alt={title} width="140" height="211" />
        <h2>{title}</h2>
        <p>Author: {authorName}</p>
        <p>Price: {price}</p>
        <Button
          className={"cart-btn"}
          title={buttonTitle}
          onClick={handleEvent}
        ></Button>
      </Link>
    </div>
  );
};

export default BookCard;
