import "./header.css";

function Header({ openModal, openAddHeroes }) {
  return (
    <div className="header">
      <h1>Choose Your team</h1>
      <div className="side-buttons">
        <div className="add-newHeroes" onClick={openAddHeroes}>
          Add New Heroes
        </div>
        <div className="cart-button" onClick={openModal}>
          Your Team
        </div>
      </div>
    </div>
  );
}

export default Header;
