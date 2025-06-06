import "./header.css";

function Header({ openModal }) {
  return (
    <div className="header">
      <h1>Choose Your team</h1>
      <div class="cart-button" onClick={openModal}>
        Your Team
      </div>
    </div>
  );
}

export default Header;
