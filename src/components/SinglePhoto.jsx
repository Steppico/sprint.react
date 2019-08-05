import React from "react";
import { connect } from "react-redux";

const SinglePhoto = props => {
  return (
    <img
      className="single-photo"
      src={`data:image/png;base64,${props.selectedPhoto}`}
      onClick={() => props.goHome()}
    />
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    goHome: () =>
      dispatch({
        type: "UPDATE_VIEW",
        payload: { currentView: "AllPhotos" }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePhoto);
