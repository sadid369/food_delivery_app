import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCatIsShown] = useState(false);

  const showCartHandaler = () => {
    setCatIsShown(true);
  };
  const hideCartHandler = () => {
    setCatIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandaler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </>
  );
}

export default App;
