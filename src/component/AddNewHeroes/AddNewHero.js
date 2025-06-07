import Modal from "../Modal/Modal";

function AddNewHero({ showAddHeroes, closeAddHeroes }) {
  return (
    <Modal show={showAddHeroes} closeModal={closeAddHeroes}>
      <div className="add-hero-container">
        <div className="add-hero-heading">Add Your Own Hero</div>
        {/* button ke submit hote hi form ka onsubmit chal jaayega and onsubmit refresh the page which we don't want */}
        <form onSubmit={() => {}} className="add-hero-form">
          <div className="form-label">Enter Hero Name</div>
          <input className="form-input" />
          <button type="submit" className="submit-button">
            Add Hero
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddNewHero;
