/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../pages/home_page/home_page";
import Button from "../../atoms/elements/button/button";
import BookCardDetails from "../../molecules/book_card/book_card_details";
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
        <BookCardDetails
          title={title}
          imageSrc={imageSrc}
          authorName={authorName}
          price={price}
        ></BookCardDetails>
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
