import React, { Fragment, useCallback, useState } from "react";
import "./css/normalize.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";

function App() {
  const [navIsVisible, setNavVisible] = useState(false);

  const handleClick = useCallback(() => {
    setNavVisible(!navIsVisible);
  }, [navIsVisible]);

  return (
    <Fragment>
      <Header handleClick={handleClick} />
      {navIsVisible === true && <Navigation />}
      <Main mainIsFull={!navIsVisible} />
    </Fragment>
  );
}

export default App;
