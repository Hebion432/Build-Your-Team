import "./Modal.css";

function Modal({ show, closeModal, children }) {
  if (!show) return null;
  return (
    //  event propgation -> parent ka onclick child mei bhi chala jata hai
    // so for that use event.stoppropgation in child
    <div className="backdrop" onClick={closeModal}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
