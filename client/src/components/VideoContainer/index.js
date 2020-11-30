import React, { useState, useEffect } from 'react'

function VideoContainer({video, backToOptions}) {
  console.log(video);
  //* state
  const [videoObj, setVideoObj] = useState();
  const [loading, setLoading] = useState(true);
  //* set state
  useEffect(async () => {
    await setVideoObj(video);
    // console.log(videoObj);
    await setLoading(false);
  });
  //* check loading
  if(loading||!videoObj) {
    console.log('loading from video container')
    return <h1>loading</h1>
  }
  //* render video
  return (
  <div>
    <h2>Title: <span>{videoObj.title}</span></h2>
    <iframe
      className='display'
      width={videoObj.width}
      height={videoObj.height}
      src={videoObj.imbedLink}
      frameBorder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture"
        allowFullScreen
      sandbox='allow-forms allow-scripts allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox'
    />
    <button>Save</button>
    <button onClick={backToOptions}>Back</button>
  </div>
  )
}

export default VideoContainer
