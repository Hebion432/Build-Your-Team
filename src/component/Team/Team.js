import Modal from "../Modal/Modal";
import "./Team.css";

function AddHero({ id, name, image, booster, incPower, decPower }) {
  return (
    <div className="hero-list">
      <p className="hero-name">{name}</p>
      <img className="hero-image" alt={name} src={image}></img>
      <div className="hero-info">
        <div className="hero-booster"> Power: {booster}</div>
        <button className="add-booster" onClick={() => incPower(id)}>
          🔥
        </button>
        <button className="remove-booster" onClick={() => decPower(id)}>
          🩸
        </button>
      </div>
    </div>
  );
}

function Cart({ showCart, closeModal, teamhero, incPower, decPower }) {
  return (
    <Modal show={showCart} closeModal={closeModal}>
      <h3>Your Team Heroes</h3>
      {/* add hero grid here so that this act as a grid container and every added card as one grid cell */}
      <div className="hero-grid">
        {teamhero.length > 0 ? (
          teamhero.map((hero) => (
            <AddHero
              key={hero.id}
              id={hero.id}
              name={hero.name}
              image={hero.image}
              booster={hero.giveBooster}
              incPower={incPower}
              decPower={decPower}
            />
          ))
        ) : (
          <div class="empty-cart"> Add Some Heroes First </div>
        )}
      </div>

      <div className="end-buttons">
        <button className="close-button" onClick={closeModal}>
          Get More
        </button>
        {teamhero.length > 0 && (
          <button className="close-button" onClick={closeModal}>
            Team Ready
          </button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
