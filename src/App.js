import React, { useState } from "react";

import Header from "./component/Header/header";
import Product from "./component/Heroes/Heroes";
import Team from "./component/Team/Team";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [heroTeam, setHeroTeam] = useState([]);

  // handler functions
  const openModal = () => setShowCart(true);
  const closeModal = () => setShowCart(false);

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

  return (
    <div>
      <Header openModal={openModal} />
      <Product onAddToTeam={onAddToTeam} />
      <Team showCart={showCart} closeModal={closeModal} teamhero={heroTeam} />
    </div>
  );
}

export default App;
