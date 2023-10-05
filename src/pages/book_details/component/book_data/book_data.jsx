/* eslint-disable react/prop-types */
import "./book_data.style.css";

const BookData = ({ bookInfo }) => {
  console.log(bookInfo);
  return (
    <table>
      <tbody>
        <tr>
          <th>Title:</th>
          <td>{bookInfo.title}</td>
        </tr>
        <tr>
          <th>Author:</th>
          <td>{bookInfo.author.name}</td>
        </tr>
        <tr>
          <th>Price:</th>
          <td>{bookInfo.price}</td>
        </tr>
        <tr>
          <th>Summary:</th>
          <td>{bookInfo.summary}</td>
        </tr>
        <tr>
          <th>Published Date:</th>
          <td>{bookInfo.publishedDate}</td>
        </tr>
        <tr>
          <th>Edition:</th>
          <td>{bookInfo.edition}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BookData;
