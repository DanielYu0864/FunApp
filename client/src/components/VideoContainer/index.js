import React, { useState, useEffect } from 'react'

function VideoContainer({video, backToOptions}) {
  //* state
  const [videoObj, setVideoObj] = useState();
  const [loading, setLoading] = useState(true);
  //* set state
  useEffect(async () => {
    await setVideoObj(video);
    await setLoading(false);
  });
  //* check loading
  if(loading||!videoObj) {
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
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture"
      allowfullscreen
      sandbox='allow-forms allow-scripts allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox'
    />
    {/* <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/0LDArAJf7-c"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture"
      allowfullscreen
    /> */}
    <button>Save</button>
    <button onClick={backToOptions}>Back</button>
  </div>
  )
}

export default VideoContainer
