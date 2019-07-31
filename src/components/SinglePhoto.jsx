import React from "react";

function SinglePhoto(props) {
  console.log("In SinglePhoto; ", props.selectedPhoto);
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <img
      className="single-photo"
      src={`data:image/png;base64,${props.selectedPhoto}`}
      onClick={props.goHome}
    />
  );
  //   return <img className="single-photo" src={props.selectedPhoto} />;
}

export default SinglePhoto;
