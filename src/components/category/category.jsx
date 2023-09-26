import "./category.style.css";
import CategoryItem from "./category_item";

const Category = () => {
  return (
    <div className="category">
      <h1 className="h1-text">Explore Our Top Catagories</h1>
      <br></br>

      <div className="row">
        <CategoryItem
          image={"/src/assets/higher_education.png"}
          title={"Higher Education"}
        ></CategoryItem>
        <CategoryItem
          image={"/src/assets/management_books.png"}
          title={"Management Books"}
        ></CategoryItem>
        <CategoryItem
          image={"/src/assets/finance_books.png"}
          title={"Finance Books"}
        ></CategoryItem>
      </div>

      <div className="row">
        <CategoryItem
          image={"/src/assets/commerce_books.png"}
          title={"Engineering Books"}
        ></CategoryItem>
        <CategoryItem
          image={"/src/assets/higher_education.png"}
          title={"Commerce Books"}
        ></CategoryItem>
        <CategoryItem
          image={"/src/assets/management_books.png"}
          title={"Science Fiction"}
        ></CategoryItem>
      </div>
    </div>
  );
};

export default Category;
