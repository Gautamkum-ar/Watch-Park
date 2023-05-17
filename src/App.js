import { Route, Routes } from "react-router-dom";

import "./App.css";

import { MockMan } from "./postMan";
import { Home } from "./pages/home/Home";
import Header from "./components/navBar/NavBar";
import ProductListing from "./pages/productListing/ProductListing";
import Cart from "./pages/cart/Cart";
import WishList from "./pages/wishList/WishList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<MockMan />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
