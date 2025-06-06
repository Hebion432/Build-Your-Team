import React, { useState } from "react";

import Header from "./component/Header/header";
import Product from "./component/Products/Product";
import Cart from "./component/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  // handler functions
  const openModal = () => setShowCart(true);
  const closeModal = () => setShowCart(false);

  return (
    <div>
      <Header openModal={openModal} />
      <Product />
      <Cart showCart={showCart} closeModal={closeModal} />
    </div>
  );
}

export default App;
