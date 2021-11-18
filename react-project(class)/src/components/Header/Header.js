import React, { Component } from "react";
import "./Header.scss";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    // console.log("Header - Rendering");
    const { handleClick } = this.props;

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
}

export default Header;
