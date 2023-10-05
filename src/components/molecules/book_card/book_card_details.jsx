import React from "react";
import Image from "../../atoms/elements/image/image";
import "./book_card_details.style.css"

function BookCardDetails({ title, imageSrc, authorName, price }) {
  return (
    <div>
      <Image
        src={imageSrc}
        alt={title}
        width="140"
        height="211"
        className={"bookCardImage"}
      ></Image>
      <h2>{title}</h2>
      <p>Author: {authorName}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default BookCardDetails;
