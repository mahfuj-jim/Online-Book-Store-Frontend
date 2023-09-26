/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import BookCard from "../book_card/book_card";
import "./cart.style.css";

const Cart = ({ books, removeBook }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedTotalPrice = books.reduce(
      (accumulator, book) =>
        accumulator + (book.discountPrice ? book.discountPrice : book.price),
      0
    );

    setTotalPrice(calculatedTotalPrice);
  }, [books]);

  return (
    <div className="cart">
      <h1 className="h1-text">Cart</h1>
      <p>Cart Curation: Craft Your Cart with Care and Begin Checkout Bliss!</p>
      <br></br>
      <div className="book-card-container">
        {books.map((book, index) => (
          <BookCard
            key={index}
            bookId={book._id}
            imageSrc={`/src/assets/book${(index % 3) + 1}.png`}
            title={book.title}
            authorName={book.authorName}
            price={book.discountPrice ? book.discountPrice : book.price}
            buttonTitle={"Remove"}
            getBook={removeBook}
          />
        ))}
      </div>
      <h1>Total Price: {totalPrice}</h1>
    </div>
  );
};

export default Cart;
