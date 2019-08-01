import React, { Component } from "react";
import _ from "lodash";
import "../styles/upload.css";
import { saveObject } from "../utils";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.focusFileInput = this.focusFileInput.bind(this);
  }

  focusFileInput(event) {
    this.fileInput.current.focus();
    saveObject(this.fileInput.current.files[0]);
  }

  render() {
    return (
      <div>
        <label htmlFor="inputButton" className="button">
          Which File?
          <input
            type="file"
            id="inputButton"
            ref={this.fileInput}
            onChange={this.focusFileInput}
          />
        </label>
        <label htmlFor="uploadButton" className="button">
          Upload!
          <input
            type="submit"
            id="uploadButton"
            onClick={this.focusFileInput}
          />
        </label>
      </div>
    );
  }
}
// className="file-upload-input"

// className="button"
