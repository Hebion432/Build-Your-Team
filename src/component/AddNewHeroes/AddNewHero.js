import Modal from "../Modal/Modal";
import { useRef } from "react";
import "./AddNewHero.css";

function AddNewHero({ showAddHeroes, closeAddHeroes, getHeroName }) {
  // Now we need the input field value from the FORM for that we will use UseRef hook
  const nameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    // we will get the whole html element in nameRef.currnt
    const heroName = nameRef.current.value;
    getHeroName(heroName);
  }
  return (
    <Modal show={showAddHeroes} closeModal={closeAddHeroes}>
      <div className="add-hero-container">
        <div className="add-hero-heading">Add Your Own Hero</div>
        {/* button ke submit hote hi form ka onsubmit chal jaayega and onsubmit refresh the page which we don't want */}
        <form onSubmit={handleSubmit} className="add-hero-form">
          <div className="form-label">Enter Hero Name</div>
          <input ref={nameRef} className="form-input" name="hero-name" />
          <button type="submit" className="submit-button">
            Add Hero
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddNewHero;
