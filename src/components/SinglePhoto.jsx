import React from "react";

function SinglePhoto(props) {
  return (
    <img
      className="single-photo"
      src={`data:image/png;base64,${props.selectedPhoto}`}
      onClick={() => props.goHome()}
    />
  );
}

export default SinglePhoto;
