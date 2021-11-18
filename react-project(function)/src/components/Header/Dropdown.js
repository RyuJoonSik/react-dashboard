import React, { useState, useEffect, useReducer, useCallback } from "react";
import "./Dropdown.scss";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

function reducer(state) {
  return { isVisible: !state.isVisible };
}

function Dropdown() {
  // const [isVisible, setVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, { isVisible: false });
  const LISTS = [
    {
      id: 1,
      title: "항목 1",
    },
    {
      id: 2,
      title: "항목 2",
    },
    {
      id: 3,
      title: "항목 3",
    },
  ];
  const DROPDOWN_LISTS = LISTS.map((LIST) => (
    <li key={LIST.id}>
      <button className="header-dropdown__btn">{LIST.title}</button>
    </li>
  ));

  const handleClick = useCallback(() => {
    dispatch();
  }, []);

  useEffect(
    () => {
      //   console.log("HEADER DROPDOWN render");
    },
    [
      /* state.isVisible */
    ]
  );

  return (
    <div className="header-dropdown">
      <button onClick={handleClick} className="header-dropdown__btn">
        (주)엔엑스 테크놀로지
        {state.isVisible ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </button>
      {state.isVisible && (
        <ul className="header-dropdown__list">{DROPDOWN_LISTS}</ul>
      )}
    </div>
  );
}

export default Dropdown;
