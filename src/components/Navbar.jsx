import React, { Component } from "react";
import Upload from "./Upload";
import "../styles/navbar.css";
import { connect } from "react-redux";
const _ = require("lodash");

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <header className="navbar-header" onClick={() => this.props.goHome()}>
          <p>Pick-a-Pic</p>
        </header>
        <Upload />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goHome: () =>
      dispatch({
        type: "UPDATE_VIEW",
        payload: { currentView: "AllPhotos" }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
