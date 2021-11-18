import React, { useEffect } from "react";
import "./Header.scss";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

function Header({ handleClick }) {
  useEffect(() => {
    //   console.log("HEADER render");
  }, []);

  return (
    <header className="header">
      <Button handleClick={handleClick}>
        <GiHamburgerMenu />
      </Button>
      <Button>
        <AiOutlineHome />
      </Button>
      <Dropdown />
      <Button isFloatRight={true}>
        <FaUserCircle />
      </Button>
    </header>
  );
}

export default Header;
