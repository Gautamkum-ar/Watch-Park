import { Route, Routes } from "react-router-dom";

import "./App.css";

import { MockMan } from "./postMan";
import { Home } from "./pages/home/Home";
import Header from "./components/navBar/NavBar";
import ProductListing from "./pages/productListing/ProductListing";
import Cart from "./pages/cart/Cart";
import WishList from "./pages/wishList/WishList";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { RequireAuth } from "./RequireAuth/RequireAuth";
import { User } from "./pages/userProfile/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Individual } from "./pages/individual/Individual";
import { Checkout } from "./pages/checkout/CheckOut";
import { OrderDetails } from "./pages/checkout/OrderDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer className="toast-custom" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<MockMan />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<Individual />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderdetail" element={<OrderDetails />} />
      </Routes>
    </div>
  );
}

export default App;
