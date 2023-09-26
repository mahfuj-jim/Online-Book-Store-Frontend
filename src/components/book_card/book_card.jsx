/* eslint-disable react/prop-types */
import Button from "../elements/button/button";
import "./book_card.style.css";

const BookCard = ({ imageSrc, title, authorName, price}) => {
    return (
      <div className="book-card">
        <img src={imageSrc} alt={title} width="140" height="211" />
        <h2>{title}</h2>
        <p>Author: {authorName}</p>
        <p>Price: {price}</p>
        <Button className={"cart-btn"} title={"Add to Cart"}></Button>
      </div>
    );
  };
  
  export default BookCard;