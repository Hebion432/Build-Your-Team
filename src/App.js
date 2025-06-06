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

  const onAddToTeam = (productid, productname, productimage) => {
    // console.log(`${productname} is added in teams`);
    const newHero = {
      id: productid,
      name: productname,
      image: productimage,
      giveBooster: 1,
    };
    setHeroTeam((data) => [...data, newHero]);
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
