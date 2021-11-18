import React, { Component } from "react";
import "./Dropdown.scss";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      lists: [
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
      ],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  render() {
    // console.log("Dropdown - rendering");
    const { lists: LISTS, isVisible } = this.state;
    const DROPDOWN_LISTS = LISTS.map((LIST) => (
      <li key={LIST.id}>
        <button className="header-dropdown__btn">{LIST.title}</button>
      </li>
    ));

    return (
      <div className="header-dropdown">
        <button onClick={this.handleClick} className="header-dropdown__btn">
          안녕하세요
          {isVisible ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </button>
        {isVisible && (
          <ul className="header-dropdown__list">{DROPDOWN_LISTS}</ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
