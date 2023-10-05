/* eslint-disable react/prop-types */
import BookDataDetails from "../../molecules/book_data/book_data_details";
import "./book_data.style.css";

const BookData = ({ bookInfo }) => {
  return (
    <table>
      <tbody>
        <BookDataDetails
          heading={"Title:"}
          title={bookInfo.title}
        ></BookDataDetails>
        <BookDataDetails
          heading={"Author:"}
          title={bookInfo.author.name}
        ></BookDataDetails>
        <BookDataDetails
          heading={"Price:"}
          title={bookInfo.price}
        ></BookDataDetails>
        <BookDataDetails
          heading={"Summary:"}
          title={bookInfo.summary}
        ></BookDataDetails>
        <BookDataDetails
          heading={"Published Date:"}
          title={bookInfo.publishedDate}
        ></BookDataDetails>
        <BookDataDetails
          heading={"Edition:"}
          title={bookInfo.edition}
        ></BookDataDetails>
      </tbody>
    </table>
  );
};

export default BookData;
