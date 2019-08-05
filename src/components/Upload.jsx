import React, { Component } from "react";
import _ from "lodash";
import "../styles/upload.css";
import { saveObject } from "../utils";
import { connect } from "react-redux";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  focusFileInput = () => {
    saveObject(this.fileInput.current.files[0]);
    alert("File submitted! Refresh the page");
  };

  render() {
    return (
      <div>
        <input className="input" type="file" ref={this.fileInput} />
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

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Upload);
