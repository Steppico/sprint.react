import React, { Component } from "react";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import "../styles/styles.css";
import { listObjects, getSingleObject } from "../utils";
import { list } from "postcss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "AllPhotos",
      photos: [],
      selectedPhoto: undefined
    };
  }

  componentDidMount() {
    return listObjects().then(imageObjects =>
      Promise.all(
        imageObjects.map(imageObject =>
          getSingleObject(imageObject.Key).then(imageName => imageName)
        )
      ).then(imageNames => this.setState({ photos: imageNames }))
    );
  }

  selectPhoto = index => {
    this.setState({
      currentView: "SinglePhoto",
      selectedPhoto: this.state.photos[index]
    });
  };

  getPhotos = () => {
    console.log("In the getPhotos Function; ", this.state.photos);
    return this.state.photos;
  };

  goHome = () => {
    this.setState({
      currentView:
        this.state.currentView === "SinglePhoto" ? "AllPhotos" : "SinglePhoto"
    });
  };

  render() {
    console.log("some comment", this.state.currentView === "AllPhotos");
    return (
      <div className="app">
        <Navbar
          className="navbar"
          goHome={this.goHome}
          getPhotos={this.getPhotos}
        />
        <h1>REACT APP!</h1>
        {this.state.currentView === "AllPhotos" ? (
          <AllPhotos
            photos={this.state.photos}
            selectPhoto={this.selectPhoto}
          />
        ) : (
          <SinglePhoto
            selectedPhoto={this.state.selectedPhoto}
            goHome={this.goHome}
          />
        )}
      </div>
    );
  }
}
