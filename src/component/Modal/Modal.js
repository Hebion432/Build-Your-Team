import "./Modal.css";

function Modal({ show, closeModal, children }) {
  if (!show) return null;
  return (
    <div class="backdrop" onClick={closeModal}>
      <div class="modal">{children}</div>
    </div>
  );
}

export default Modal;
