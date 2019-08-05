import React, { Component } from "react";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import "../styles/styles.css";
import { listObjects, getSingleObject } from "../utils";
import { connect } from "react-redux";
import { list } from "postcss";
const pikachu = require("../pkc.jpg");

class App extends Component {
  componentDidMount() {
    return listObjects().then(imageObjects =>
      Promise.all(
        imageObjects.map(imageObject =>
          getSingleObject(imageObject.Key).then(imageName => imageName)
        )
      ).then(imageNames => this.props.downloadPhotos(imageNames))
    );
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        {this.props.loading === true ? (
          <div className="loading">
            <img src={pikachu}></img>
          </div>
        ) : (
          ""
        )}
        {this.props.currentView === "AllPhotos" ? (
          <AllPhotos />
        ) : (
          <SinglePhoto />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goHome: () =>
      dispatch({
        type: "UPDATE_VIEW",
        payload: { currentView: "AllPhotos", photos: this.props.photos }
      }),
    downloadPhotos: arrPhotos =>
      dispatch({
        type: "DOWNLOAD_PHOTOS",
        payload: { photos: arrPhotos, loading: false }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
