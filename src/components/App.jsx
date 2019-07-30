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
    listObjects().then(datas =>
      datas.map(data =>
        getSingleObject(data.Key).then(key => this.state.photos.push(key))
      )
    );
  }

  selectPhoto = index => {
    this.setState({
      currentView: "SinglePhoto",
      selectedPhoto: this.state.photos[index]
    });
  };

  getPhotos = () => {};

  goHome = () => {
    this.setState({
      currentView:
        this.state.currentView === "AllPhotos" ? "SinglePhoto" : "AllPhotos"
    });
  };

  render() {
    return (
      <div className="app">
        <Navbar goHome={this.goHome} getPhotos={this.getPhotos} />
        <h1>TAKASHI RAKUGAKI (PRINCIPESSA TAKASHI)!</h1>
        {this.state.currentView === "AllPhotos" ? (
          <AllPhotos
            photos={this.state.photos}
            selectPhoto={this.selectPhoto}
          />
        ) : (
          <SinglePhoto selectedPhoto={this.state.selectedPhoto} />
        )}
      </div>
    );
  }
}
