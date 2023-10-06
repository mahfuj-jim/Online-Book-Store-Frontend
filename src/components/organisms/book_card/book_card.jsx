/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../atoms/elements/button/button";
import BookCardDetails from "../../molecules/book_card/book_card_details";
import {
  saveCart,
  updateCart,
  deleteCart,
} from "../../../redux/slice/cart_slice";
import "./book_card.style.css";

const BookCard = ({
  bookId,
  imageSrc,
  title,
  authorName,
  price,
  buttonTitle,
  quantity,
  isRemove,
}) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);

  let book = {
    bookId: bookId,
    imageSrc: imageSrc,
    title: title,
    authorName: authorName,
    price: price,
    quantity: quantity,
  };

  const handleEvent = () => {
    isRemove ? removeBook(book) : addBook(book);
  };

  const handleIncrease = () => {
    book = { ...book, quantity: quantity + 1 };
    dispatch(updateCart(book));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      book = { ...book, quantity: quantity - 1 };
      dispatch(updateCart(book));
    }else{
      removeBook(book);
    }
  };

  const addBook = (book) => {
    const bookExists = cartData.some((item) => item.bookId === book.bookId);

    if (!bookExists) {
      book = { ...book, quantity: 1 };
      dispatch(saveCart(book));
      alert("Book Added to Cart!!!");
    } else {
      alert("Book Already Exists in Cart!!!");
    }
  };

  const removeBook = (book) => {
    dispatch(deleteCart(book));
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
      </Link>
      <Button
        className={"cart-btn"}
        title={buttonTitle}
        onClick={handleEvent}
      ></Button>
      {isRemove && (
        <div className="quantity-counter">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
