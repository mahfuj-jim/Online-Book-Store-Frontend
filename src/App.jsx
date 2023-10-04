import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/ui/header/header";
import Footer from "./components/ui/footer/footer"
import BookDetailsPage from "./pages/book_details/book_details";
import HomePage from "./pages/home_page/home_page";
import SignUpPage from "./pages/signup_page/signup_page";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} exact></Route>
        <Route path="/book/:bookId" element={<BookDetailsPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;