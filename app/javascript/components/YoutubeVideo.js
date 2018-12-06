import React from 'react';
import ReactPlayer from 'react-player';

const YoutubeVideo = props => {
  const videoUrls = (
    props.data.map(data => (
      data.snippet.resourceId.videoId)
    ) 
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
      width='100%' 
      height='100%'
      autoPlay={false} 
      />
  )
}
  
  export default YoutubeVideo;