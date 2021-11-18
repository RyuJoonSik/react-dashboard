import React, { useCallback, useEffect, useState } from "react";
import "./Navigation.scss";
import NavigationList from "./NavigationList";
import { LISTS } from "../../data/NavigationData";

function Navigation() {
  const LISTS_LENGTH = LISTS.length;
  const [clickStates, setClickState] = useState(
    Array.from({ length: LISTS_LENGTH + 1 }, (val, idx) => {
      if (idx !== 0) {
        return false;
      }
    })
  );

  const handleClick = useCallback((id) => {
    if (clickStates[id] === true) {
      return;
    }

    let temp = clickStates.map(() => false);

    setClickState(temp);

    temp[id] = true;

    setClickState(temp);
  }, []);

  useEffect(() => {
    // console.log("NAV show");s
    // return () => console.log("NAV hide");
  }, []);

  return (
    <nav className="nav">
      <ul>
        {LISTS.map((LIST) => (
          <NavigationList
            key={LIST.id}
            LIST={LIST}
            isClicked={clickStates[LIST.id]}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
