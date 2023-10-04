/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import BookCard from "../../../../components/ui/book_card/book_card";
import { MyContext } from "../../home_page.jsx";
import "./cart.style.css";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartBooksData } = useContext(MyContext);

  useEffect(() => {
    let calculatedTotalPrice = 0;
    cartBooksData.map((book) => {
      calculatedTotalPrice += book.discountPrice
        ? book.discountPrice
        : book.price;
    });

    setTotalPrice(calculatedTotalPrice);
  }, [cartBooksData]);

  return (
    <div className="cart">
      <h1 className="h1-text">Cart</h1>
      <p>Cart Curation: Craft Your Cart with Care and Begin Checkout Bliss!</p>
      <br></br>
      <div className="book-card-container">
        {cartBooksData.map((book, index) => (
          <BookCard
            key={index}
            bookId={book.bookId}
            imageSrc={book.imageSrc}
            title={book.title}
            authorName={book.authorName}
            price={book.discountPrice ? book.discountPrice : book.price}
            buttonTitle={"Remove"}
            isRemove={true}
          />
        ))}
      </div>
      <h1>Total Price: {totalPrice}</h1>
    </div>
  );
};

export default Cart;
