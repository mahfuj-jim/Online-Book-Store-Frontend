import { useState, createContext } from "react";
import Intro from "./component/intro/intro.jsx";
import Category from "./component/category/category.jsx";
import NewRelease from "./component/new_release/new_release.jsx";
import Cart from "./component/cart/cart.jsx";

export const MyContext = createContext();

const HomePage = () => {
  const [cartBooksData, setBooksData] = useState([]);

  const addBook = (book) => {
    const bookExists = cartBooksData.some(
      (item) => item.bookId === book.bookId
    );

    if (!bookExists) {
      setBooksData([...cartBooksData, book]);
    } else {
      alert("Book Already Exists in Cart!!!");
    }
  };

  const removeBook = (book) => {
    const index = cartBooksData.findIndex(
      (item) => item.bookId === book.bookId
    );
    const updatedList = [...cartBooksData];
    updatedList.splice(index, 1);
    setBooksData(updatedList);
  };

  return (
    <div>
      <Intro></Intro>
      <Category></Category>
      <MyContext.Provider value={{ addBook, removeBook, cartBooksData }}>
        <NewRelease></NewRelease>
        <Cart></Cart>
      </MyContext.Provider>
    </div>
  );
};

export default HomePage;
