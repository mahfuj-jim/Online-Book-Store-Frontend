import React from "react";
import "./book_data_details.style.css"

function BookDataDetails({heading, title}) {
  return (
    <tr>
      <th>{heading}</th>
      <td>{title}</td>
    </tr>
  );
}

export default BookDataDetails;
