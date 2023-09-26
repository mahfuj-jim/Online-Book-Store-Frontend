/* eslint-disable react/prop-types */
import Button from "../elements/button/button";
import "./book_card.style.css";

const BookCard = ({ bookId, imageSrc, title, authorName, price, getBook, buttonTitle }) => {
  const handleEvent = () => {
    const book = {
      bookId,
      imageSrc,
      title,
      authorName,
      price,
    };

    getBook(book);
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
