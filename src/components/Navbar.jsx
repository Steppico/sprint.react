import React, { Component } from "react";
import Upload from "./Upload";
import "../styles/navbar.css";
const _ = require("lodash");

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  receiveFiles() {
    return this.props.getPhotos();
  }

  render() {
    return (
      <div className="navbar">
        <header className="navbar-header" onClick={() => this.props.goHome()}>
          <Upload receiveFiles={this.receiveFiles} />
        </header>
      </div>
    );
  }
}
