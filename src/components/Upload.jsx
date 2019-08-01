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
    this.fileInput.current.focus()
      ? saveObject(this.fileInput.current.files[0])
      : alert("Please select a file first");
  }

  render() {
    return (
      <div>
        <input
          className="input"
          type="file"
          ref={this.fileInput}
          onChange={this.focusFileInput}
        />
        <input className="submit" type="submit" onClick={this.focusFileInput} />
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
      </div>
    );
  }
}
// className="file-upload-input"

// className="button"
