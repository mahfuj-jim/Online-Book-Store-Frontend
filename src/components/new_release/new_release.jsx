/* eslint-disable react/prop-types */
import "./new_release.style.css";
import BookCard from "../book_card/book_card";
import useNewReleaseBooksHook from "../../hooks/useNewReleaseBooksHook";

const NewRelease = () => {
  const { booksData, loading } = useNewReleaseBooksHook();

  if (loading) {
    return <div>Loading...</div>;
  }

  const books = booksData.data.books;

  return (
    <div className="new-release">
      <h1 className="h1-text">New Release Books</h1>
      <p>1000+ books are published by different authors every day.</p>
      <br></br>
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
