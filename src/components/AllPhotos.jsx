import React, { Component } from "react";
import _ from "lodash";

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("In AllPhotos");
    return (
      <div>
        {this.props.photos.map(photo => {
          return (
            <img
              alt="some text"
              className={("imageCell", "image")}
              width="100px"
              height="100px"
              key={this.props.photos.indexOf(photo)}
              src={`data:image/png;base64,${photo}`}
              onClick={this.props.selectPhoto(this.props.photos.indexOf(photo))}
            />
          );
        })}
      </div>
    );
  }
}
