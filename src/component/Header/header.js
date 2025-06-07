import "./header.css";

function Header({ openModal, openAddHeroes }) {
  return (
    <div className="header">
      <h1>Choose Your team</h1>
      <div class="side-buttons">
        <div class="add-newHeroes" onClick={openAddHeroes}>
          Add New Heroes
        </div>
        <div class="cart-button" onClick={openModal}>
          Your Team
        </div>
      </div>
    </div>
  );
}

export default Header;
