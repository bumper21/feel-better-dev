import React from 'react';
import { Component } from 'react'
import ExerciseModal from './FeelBetterModal';
import JournalModal from './JournalModal';
import VideoModal from './VideoModal';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      data: [],
  
    };
  }

  render () {
    return (
      <div>
        <div id="buttonsDiv">
          <ExerciseModal />
          <JournalModal />
          <VideoModal />
        </div>
      </div>
    )
  }
}

export default Home