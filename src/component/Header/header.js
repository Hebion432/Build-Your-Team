import React, { useState } from "react";
import "./header.css";
import Modal from "../Modal/Modal";

function Header() {
  const [showCart, setShowCart] = useState(false);

  // handler functions
  const openModal = () => setShowCart(true);
  const closeModal = () => setShowCart(false);

  return (
    <div className="header">
      <h1>Choose Your team</h1>
      <div class="cart-button" onClick={openModal}>
        Cart
      </div>
      <Modal show={showCart} closeModal={closeModal}>
        <h3>Your Added Items</h3>
        <p> No items yet</p>
        <button class="close-button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Header;
