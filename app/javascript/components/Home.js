import React from 'react';
import { Component } from 'react'
import ExerciseModal from './ExerciseModal';
import JournalModal from './JournalModal';
import VideoButton from './VideoButton';
// import { Player } from 'video-react';
// 

class Home extends Component {

  render () {
    return (
        <div id="buttonsDiv">
          <ExerciseModal />
          <JournalModal />
          <VideoButton />
        </div>
    )
  }
}

export default Home