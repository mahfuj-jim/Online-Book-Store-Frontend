import "./App.css";
import { useState, createContext } from "react";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Category from "./components/category/category";
import NewRelease from "./components/new_release/new_release";
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";

export const MyContext = createContext();

function App() {
  const [cartBooksData, setBooksData] = useState([]);

  const addBook = (book) => {
    const bookExists = cartBooksData.some((item) => item.bookId === book.bookId);

    if (!bookExists) {
      setBooksData([...cartBooksData, book]);
    } else {
      alert("Book Already Exists in Cart!!!");
    }
  };

  const removeBook = (book) => {
    const index = cartBooksData.findIndex((item) => item.bookId === book.bookId);
    const updatedList = [...cartBooksData];
    updatedList.splice(index, 1);
    setBooksData(updatedList);
  };

  return (
    <div>
      <Header></Header>
      <Intro></Intro>
      <Category></Category>
      <MyContext.Provider value={{ addBook, removeBook, cartBooksData }}>
        <NewRelease></NewRelease>
        <Cart></Cart>
      </MyContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;