/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./new_release.style.css";
import BookCard from "../book_card/book_card";

const NewRelease = ({ addBook }) => {
  const [booksData, setBooksData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/book/all?page=1&limit=20")
      .then((response) => response.json())
      .then((data) => setBooksData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!booksData) {
    return <div>Loading...</div>;
  }

  const books = booksData.data.books;

  return (
    <div className="new-release">
      <h1 className="h1-text">New Release Books</h1>
      <p>1000+ books are published by different authors everyday. </p>
      <br></br>
      <div className="book-card-container">
        {books.map((book, index) => (
          <BookCard
            key={index}
            bookId={book._id}
            imageSrc={`/src/assets/book${(index % 3) + 1}.png`}
            title={book.title}
            authorName={book.author.name}
            getBook={addBook}
            price={book.discountPrice ? book.discountPrice : book.price}
            buttonTitle={"Add to Cart"}
          />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
