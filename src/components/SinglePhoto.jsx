import React from "react";

function SinglePhoto(props) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={`data:image/png;base64,${props.selectedPhoto}`} />;
}

export default SinglePhoto;
