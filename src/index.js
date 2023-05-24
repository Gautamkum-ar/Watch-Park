import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { APIConetextProvider } from "./contexts/APIContext/APIContext";
import { ProductContextProvider } from "./contexts/ProductContext/ProductContext";
import { CartContextProvider } from "./contexts/CartContext/CartContext";
import { AuthContextProvider } from "./contexts/AuthContext/AuthContext";
import { WishListProvider } from "./contexts/wishListContext/wishListContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <APIConetextProvider>
          <ProductContextProvider>
            <CartContextProvider>
              <WishListProvider>
                <App />
              </WishListProvider>
            </CartContextProvider>
          </ProductContextProvider>
        </APIConetextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
