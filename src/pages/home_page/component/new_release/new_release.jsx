/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "../../../../components/elements/input/input";
import BookCard from "../../../../components/ui/book_card/book_card";
import useNewReleaseBooksHook from "../../../../hooks/useNewReleaseBooksHook";
import "./new_release.style.css";

const NewRelease = () => {
  const [searchKey, setSearchKey] = useState("");
  const { booksData, loading } = useNewReleaseBooksHook(searchKey);

  if (loading) {
    return <div>Loading...</div>;
  }

  const books = booksData.data.books;

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="new-release">
      <h1 className="h1-text">New Release Books</h1>
      <p>1000+ books are published by different authors every day.</p>
      <Input
        className={"search-input"}
        type={"text"}
        placeholder={"Search by Book or Author Name"}
        value={searchKey}
        onChange={handleInputChange}
      ></Input>
      <div className="book-card-container">
        {books.map((book, index) => (
          <BookCard
            key={index}
            bookId={book._id}
            imageSrc={`/src/assets/book${(index % 3) + 1}.png`}
            title={book.title}
            authorName={book.author.name}
            price={book.discountPrice ? book.discountPrice : book.price}
            buttonTitle={"Add to Cart"}
            isRemove={false}
          />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
