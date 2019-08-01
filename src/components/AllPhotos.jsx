import React, { Component } from "react";
import _ from "lodash";

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
    this.photos = this.props.photos;
  }

  render() {
    return (
      <div>
        {this.props.photos.map(photo => {
          return (
            <img
              className="imageCell image"
              key={this.props.photos.indexOf(photo)}
              src={`data:image/png;base64,${photo}`}
              onClick={() => {
                this.props.selectPhoto(this.props.photos.indexOf(photo));
              }}
            />
          );
        })}
      </div>
    );
  }
}
