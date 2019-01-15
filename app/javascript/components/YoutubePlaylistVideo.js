import React from 'react';
import ReactPlayer from 'react-player';

const YoutubePlaylistVideo = props => {
  const videoUrls = (
    props.data
  )
  
  const randomVidUrl = (urls) => {
    return (urls[Math.floor(Math.random()*urls.length)])
  }

  const finalUrl = (
    "http://www.youtube.com/watch?v=" + randomVidUrl(videoUrls) + "&t=79s&index=2&list=PLVpJ_ku_DBpYQCtNK7pyuGW30kEbfC4bU"
  )

  return (
      <ReactPlayer 
      className="react-player"
      url={finalUrl} 
      controls={true}
      autoPlay={false} 
      />                
  )
}
  
  export default YoutubePlaylistVideo;