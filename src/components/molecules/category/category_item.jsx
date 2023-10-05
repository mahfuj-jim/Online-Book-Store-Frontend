/* eslint-disable react/prop-types */
import Image from "../../atoms/elements/image/image";
import "./category_item.style.css";

const CategoryItem = ({ image, title }) => {
  return (
    <a className="category-col">
      <Image src={image} alt={title} className={"categoryImage"}></Image>
      <div className="category-text">
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default CategoryItem;
