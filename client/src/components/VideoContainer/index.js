import React, { useState, useEffect } from 'react'

function VideoContainer({video, backToOptions}) {
  console.log(video);
  //* state
  const [videoObj, setVideoObj] = useState();
  const [loading, setLoading] = useState(true);
  //* set state
  useEffect(() => {
    setVideoObj(video);
    // console.log(videoObj);
    setLoading(false);
  });
  //* check loading
  if(loading||!videoObj) {
    console.log('loading from video container')
    return <h1>loading</h1>
  }
  //* render video
  return (
    <section className="media">
    <div className="media__container">
      <h2 className="media__title">{videoObj.title}</h2>
      <iframe
        title={videoObj.title}
        className='media__display'
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
      <div className="media__buttons">
        <button className="media__button">Save</button>
        <button className="media__button" onClick={backToOptions}>Back</button>
      </div>
    </div>
  </section>
  )
}

export default VideoContainer
