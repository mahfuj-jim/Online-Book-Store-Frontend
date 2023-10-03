import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetailsPage from "./pages/book_details/book_details";
import HomePage from "./pages/home_page/home_page";
import SignUpPage from "./pages/signup_page/signup_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} exact></Route>
        <Route path="/book/:bookId" element={<BookDetailsPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
