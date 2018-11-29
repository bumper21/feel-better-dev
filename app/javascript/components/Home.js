import React from 'react';
// import { Player } from 'video-react';

class Home extends React.Component {
  render () {
    return (
        <div className="container flex-grow" name="buttonContainer">
          {/* <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player> */}
          <button className="btn" data-toggle="modal">Watch Better</button>
          <br />
          <button className="btn btn-warning m-1">Journal Better</button>
          <br />
          <button className="btn btn-success m-1">Feel Better</button>
        </div>
    )
  }
}

export default Home