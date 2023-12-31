import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/organisms/header/header";
import Footer from "./components/organisms/footer/footer";
import HomePage from "./components/pages/home_page/home_page";
import BookPage from "./components/pages/book_page/book_page";
import SignUpPage from "./components/pages/signup_page/signup_page";
import LoginPage from "./components/pages/login_page/login_page";
import CartPage from "./components/pages/cart_page/cart_page";
import AuthenticateUserPage from "./components/pages/authenticate_user";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} exact></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route element={<AuthenticateUserPage />}>
          <Route path="/book/:bookId" element={<BookPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
