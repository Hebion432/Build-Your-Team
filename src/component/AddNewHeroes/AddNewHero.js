import Modal from "../Modal/Modal";
import { useRef, useState } from "react";
import "./AddNewHero.css";

function AddNewHero({ showAddHeroes, closeAddHeroes, getHeroName }) {
  // Now we need the input field value from the FORM for that we will use UseRef hook
  // const nameRef = useRef();

  // we will do this using useState hook

  const [heroName, setHeroName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    getHeroName(heroName);
  }

  const setNewHeroName = (event) => {
    const enteredName = event.target.value;
    // console.log(enteredName);
    // ye har bar heroName ko set karta rahega jab tak user submit button pe click na kare
    setHeroName(enteredName);
  };
  return (
    <Modal show={showAddHeroes} closeModal={closeAddHeroes}>
      <div className="add-hero-container">
        <div className="add-hero-heading">Add Your Own Hero</div>
        {/* button ke submit hote hi form ka onsubmit chal jaayega and onsubmit refresh the page which we don't want */}
        <form onSubmit={handleSubmit} className="add-hero-form">
          <div className="form-label">Enter Hero Name</div>
          <input
            className="form-input"
            name="hero-name"
            // onchange har baar jab value change hogi tab setNewHeroName ko chalayega
            value={heroName}
            onChange={setNewHeroName}
          />
          <button type="submit" className="submit-button">
            Add Hero
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddNewHero;
