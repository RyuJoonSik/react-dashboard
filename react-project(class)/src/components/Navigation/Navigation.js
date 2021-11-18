import React, { Component } from "react";
import "./Navigation.scss";
import NavigationList from "./NavigationList";
import { LISTS } from "./NavigationData";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.listsLength = LISTS.length;
    this.state = {
      clickStates: Array.from({ length: this.listsLength + 1 }, (val, idx) => {
        if (idx !== 0) {
          return false;
        }
      }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (this.state.clickStates[id] === true) {
      return;
    }

    const { clickStates } = this.state;
    let temp = clickStates.map(() => false);

    this.setState(() => ({
      clickStates: [...temp],
    }));

    temp[id] = true;

    this.setState(() => ({
      clickStates: [...temp],
    }));
  }

  render() {
    // console.log("Navigation - Rendering");

    return (
      <nav className="nav">
        <ul>
          {LISTS.map((LIST) => (
            <NavigationList
              key={LIST.id}
              LIST={LIST}
              isClicked={this.state.clickStates[LIST.id]}
              handleClick={this.handleClick}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
