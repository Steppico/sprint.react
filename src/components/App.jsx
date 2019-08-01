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
        imageObjects
          .slice(0, 10)
          .map(imageObject =>
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
    return this.state.photos;
  };

  goHome = () => {
    this.setState({
      currentView:
        this.state.currentView === "SinglePhoto" ? "AllPhotos" : "SinglePhoto"
    });
  };

  render() {
    return (
      <div className="app">
        <Navbar goHome={this.goHome} getPhotos={this.getPhotos} />
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
