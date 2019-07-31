import React, { Component } from "react";
import _ from "lodash";
import "../styles/upload.css";
import fs from "fs";

export default class Upload extends Component {
  constructor(props) {
    super(props);
  }

  fileInput = React.createRef();

  render() {
    console.log("this.props in Upload; ", this.props);
    console.log(
      "this.props.receiveFiles in Upload; ",
      JSON.stringify(this.props.receiveFiles.getPhotos)
    );
    return (
      <div>
        <h1>this is Navbar? No, this is Patrick!</h1>
        <button className="button">Submit</button>
        <input className="file-upload-input"></input>
        <input ref={this.fileInput}></input>
      </div>
    );
  }
}
