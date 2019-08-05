import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";

class AllPhotos extends Component {
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

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectPhoto: index =>
      dispatch({
        type: "UPDATE_VIEW",
        payload: { currentView: "SinglePhoto", index: index }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPhotos);
