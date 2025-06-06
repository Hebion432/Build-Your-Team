import Modal from "../Modal/Modal";

function Cart({ showCart, closeModal }) {
  return (
    <Modal show={showCart} closeModal={closeModal}>
      <h3>Your Added Items</h3>
      <p> No items yet</p>
      <button class="close-button" onClick={closeModal}>
        Close
      </button>
    </Modal>
  );
}

export default Cart;
