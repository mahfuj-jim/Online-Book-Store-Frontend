import React from "react";
import Input from "../../atoms/elements/input/input";
import BookCard from "../../organisms/book_card/book_card";

function NewReleaseDetails({searchKey, handleInputChange, books}) {
  return (
    <div>
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
}

export default NewReleaseDetails;
