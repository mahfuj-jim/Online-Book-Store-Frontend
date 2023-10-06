import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BookCard from "../../organisms/book_card/book_card.jsx";
import "./cart.style.css";

const CartPage = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let calculatedTotalPrice = 0;
    cartData.map((book) => {
      calculatedTotalPrice +=
        (book.discountPrice ? book.discountPrice : book.price) * book.quantity;
    });

    setTotalPrice(calculatedTotalPrice);
  }, [cartData]);

  return (
    <div className="cart">
      <h1 className="h1-text">Cart</h1>
      <p>Cart Curation: Craft Your Cart with Care and Begin Checkout Bliss!</p>
      <br></br>
      <div className="book-card-container">
        {cartData.map((book, index) => (
          <BookCard
            key={index}
            bookId={book.bookId}
            imageSrc={book.imageSrc}
            title={book.title}
            authorName={book.authorName}
            price={book.discountPrice ? book.discountPrice : book.price}
            quantity={book.quantity}
            buttonTitle={"Remove"}
            isRemove={true}
          />
        ))}
      </div>
      <h1>Total Price: {totalPrice}</h1>
    </div>
  );
};

export default CartPage;
