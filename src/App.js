import React, { useState } from "react";

import Header from "./component/Header/header";
import Hero from "./component/Heroes/Heroes";
import Team from "./component/Team/Team";
import AddNewHero from "./component/AddNewHeroes/AddNewHero";
import initialHeroes from "./data/productdetails.json";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [heroes, setHeroes] = useState(initialHeroes);
  const [showAddHeroes, setShowAddHeroes] = useState(false);

  const [heroTeam, setHeroTeam] = useState([]);

  // handler functions
  const openModal = () => setShowCart(true);
  const closeModal = () => setShowCart(false);

  const openAddHeroes = () => setShowAddHeroes(true);
  const closeAddHeroes = () => setShowAddHeroes(false);

  const incrementPower = (heroid) => {
    const heroIndex = heroTeam.findIndex((hero) => hero.id === heroid);
    const updataedHeroList = [...heroTeam];
    updataedHeroList[heroIndex].giveBooster += 1;
    setHeroTeam(updataedHeroList);
  };
  const decrementPower = (heroid) => {
    const heroIndex = heroTeam.findIndex((hero) => hero.id === heroid);
    let updataedHeroList = [...heroTeam];

    const power = updataedHeroList[heroIndex].giveBooster;
    if (power === 1) {
      // that means ek aur decrease and ye remove ho jana chaiye team se
      updataedHeroList = updataedHeroList.filter((hero) => hero.id !== heroid);
    } else {
      updataedHeroList[heroIndex].giveBooster -= 1;
    }
    setHeroTeam(updataedHeroList);
  };

  const onAddToTeam = (heroid, heroname, heroimage) => {
    //add new only if already didn't existed
    const heroIndex = heroTeam.findIndex((hero) => hero.id === heroid);

    if (heroIndex === -1) {
      // first time added
      const newHero = {
        id: heroid,
        name: heroname,
        image: heroimage,
        giveBooster: 1,
      };
      setHeroTeam((data) => [...data, newHero]);
    } else {
      const updataedHeroList = [...heroTeam];
      updataedHeroList[heroIndex].giveBooster += 1;
      setHeroTeam(updataedHeroList);
    }
  };

  const getHeroNameFormChild = (heroName) => {
    const newAddHero = {
      id: heroes.length + 1,
      name: heroName,
      image: "",
    };

    setHeroes((state) => [...state, newAddHero]);
    closeAddHeroes();
  };

  return (
    <React.Fragment>
      <Header openModal={openModal} openAddHeroes={openAddHeroes} />
      <Hero heroes={heroes} onAddToTeam={onAddToTeam} />
      <Team
        showCart={showCart}
        closeModal={closeModal}
        teamhero={heroTeam}
        incPower={incrementPower}
        decPower={decrementPower}
      />
      <AddNewHero
        showAddHeroes={showAddHeroes}
        closeAddHeroes={closeAddHeroes}
        getHeroName={getHeroNameFormChild}
      ></AddNewHero>
    </React.Fragment>
  );
}

export default App;
