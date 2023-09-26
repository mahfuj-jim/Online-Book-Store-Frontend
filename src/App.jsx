import "./App.css";
import { useState } from "react";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Category from "./components/category/category";
import NewRelease from "./components/new_release/new_release";
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";

function App() {
  const [booksData, setBooksData] = useState([]);

  const addBook = (book) => {
    const bookExists = booksData.some(
      (item) => item.bookId === book.bookId
    );

    if (!bookExists) {
      setBooksData([...booksData, book ]);
    } else {
      alert("Book Already Exists in Cart!!!");
    }
  };

  const removeBook = (index) => {
    const updatedList = [...booksData];
    updatedList.splice(index, 1);
    setBooksData(updatedList);
  };

  return (
    <div>
      <Header></Header>
      <Intro></Intro>
      <Category></Category>
      <NewRelease addBook={addBook}></NewRelease>
      <Cart books={booksData} removeBook={removeBook}></Cart>
      <Footer></Footer>
    </div>
  );
}

export default App;
