import React from 'react';
import { Component } from 'react'
import ExerciseModal from './ExerciseModal';
import JournalModal from './JournalModal';
// import { Player } from 'video-react';
// 

class Home extends Component {

  render () {
    return (
        
        <div className="container" name="buttonContainer">
          {/* <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player> */}
          <ExerciseModal />
          <button className="btn" name="VidModal" data-toggle="modal">Watch Better</button>
          <br />
          <JournalModal />
          <br />
        </div>
    )
  }
}

export default Home