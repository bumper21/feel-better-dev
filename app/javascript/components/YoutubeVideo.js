import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

class YoutubeVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
  
    };
  }

  render () {
    return (
        <ReactPlayer url="https://www.youtube.com/watch?v=IDPDEKtd2yM&t=79s&index=2&list=PLVpJ_ku_DBpYQCtNK7pyuGW30kEbfC4bU" autoPlay="false" />
    )
  }
}
  export default YoutubeVideo;