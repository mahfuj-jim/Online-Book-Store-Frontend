import { useState, createContext } from "react";
import Intro from "../../organisms/intro/intro";
import Category from "../../organisms/category/category";
import NewRelease from "../../organisms/new_release/new_release";
import useNewReleaseBooksHook from "../../../hooks/useNewReleaseBooksHook";

export const MyContext = createContext();

const HomePage = () => {
  const [cartBooksData, setBooksData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const { booksData, loading } = useNewReleaseBooksHook(searchKey);

  if (loading) {
    return <div>Loading...</div>;
  }

  const books = booksData.data.books;

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
      <MyContext.Provider value={{ addBook, removeBook, cartBooksData, books }}>
        <NewRelease
          searchKey={searchKey}
          setSearchKey={setSearchKey}
        ></NewRelease>
      </MyContext.Provider>
    </div>
  );
};

export default HomePage;
