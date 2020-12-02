import React, { useState, useEffect } from 'react'
import  API from '../../utils/API';
function VideoContainer({video, backToOptions, user_id}) {

  // console.log(video);
  //* state
  const [userId, setUserId] = useState();
  const [videoObj, setVideoObj] = useState();
  const [loading, setLoading] = useState(true);
  const saveVideo = event => {
    event.preventDefault();
    console.log('User ID: ' + userId);
    let videoObject = {
      age: videoObj.age,
      type: videoObj.type,
      title: videoObj.title,
      imbedLink: videoObj.imbedLink,
      width: videoObj.width,
      height: videoObj.height,
      scrolling: videoObj.scrolling
    };
    console.log(videoObject);
    API.save(videoObject, userId)
      .then(e => {
        console.log(e);
        if(e.status === 200) alert('Video Save!');
      })
      .catch(err => {
        console.error(err);
      })
  }
  //* set state
  useEffect(() => {
    setVideoObj(video);
    // console.log(videoObj);
    setUserId(user_id);
    console.log('From video container: ' + userId);
    setLoading(false);
  });
  //* check loading
  if(loading||!videoObj) {
    console.log('loading from video container')
    return <h1>loading</h1>
  }
  //* render video
  return (
// <<<<<<< Faranak-views
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
// =======
//   <div>
//     <h2>Title: <span>{videoObj.title}</span></h2>
//     <iframe
//       title={videoObj.title}
//       className='display'
//       width={videoObj.width}
//       height={videoObj.height}
//       src={videoObj.imbedLink}
//       frameBorder="0"
//       allow="
//         accelerometer;
//         autoplay;
//         clipboard-write;
//         encrypted-media;
//         gyroscope;
//         picture-in-picture"
//         allowFullScreen
//       sandbox='allow-forms allow-scripts allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox'
//     />
//     <button onClick={saveVideo}>Save</button>
//     <button onClick={backToOptions}>Back</button>
//   </div>
// >>>>>>> main
  )
}

export default VideoContainer
