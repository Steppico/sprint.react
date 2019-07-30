import React, { Component } from "react";
import Upload from "./Upload";
import "../styles/navbar.css";
const _ = require("lodash");

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  receiveFiles() {}

  render() {
    return (
      <div>
        <div className="navbar" />
        <header className="navbar-header" onClick={this.props.goHome}></header>
        <Upload receiveFiles={this.props.getPhotos} />
      </div>
    );
  }
}