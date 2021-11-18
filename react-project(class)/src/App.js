import React, { Component, Fragment } from "react";
import "./normalize.css";
import "./App.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navIsVisible: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      navIsVisible: !this.state.navIsVisible,
    });
  }

  render() {
    console.log("App - Rendering");

    const { navIsVisible } = this.state;

    return (
      <Fragment>
        <Header handleClick={this.handleClick} />
        {navIsVisible === true && <Navigation />}
        <Main mainIsFull={!navIsVisible} />
      </Fragment>
    );
  }
}

export default App;
