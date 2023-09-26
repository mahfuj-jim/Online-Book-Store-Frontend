/* eslint-disable react/prop-types */
const CategoryItem = ({ image, title }) => {
  return (
    <div className="category-col">
      <img src={image} alt={title}></img>
      <div className="category-text">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default CategoryItem;
