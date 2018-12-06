import React from 'react';
const VideoButton = props => {
  return (
    <div>
      <button id="videoButton" onClick={props.toggle} >
        Watch Better
      </button>
    </div>
  );
}

export default VideoButton;