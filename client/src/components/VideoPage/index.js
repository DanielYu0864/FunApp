import React, {useState, useEffect}from 'react';
import VideoContainer from '../VideoContainer';
import FavoriteButton from '../FavoriteButton';
function VideoPage({videoList, user_id}) {
  // console.log(videoList)
  //* set state
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(true);
  const [videoArr, setVideoArr] = useState([]);
  const [video, setVideo] = useState({});
  const [videoChoose, setVideoChoose] = useState(false);
  //* re-render component everytime when state changed
  useEffect(() => {
    if(videoList !== []) {
      checkLoading();
    }
  });
  //* re-render component when video chose
  useEffect(() => {
    checkLoading();
  }, [videoChoose]);
  //* re-render component when video chose
  useEffect(() => {
    checkLoading();
    // console.log('re-render')
  }, [video])
  //* make sure loading properly
  const checkLoading = async () => {
    await setVideoArr(videoList);
    await setUserId(user_id);
    await setLoading(false);
    // console.log(videoArr)
  }
  //* change video state to the video data when button click
  const videoChosen = async (id) => {
    let videoInfo = videoArr.filter(e => e.id === id);
    await setVideo(videoInfo[0]);
    await setVideoChoose(true);
  };

  //* back to the video choose page
  const backToOptions = async () => {
    await setVideoChoose(false);
  }
  //* check loading
  if(loading === true) {
    console.log('loading from video page')
    return <h1>Loading ...</h1>
  }
  //* check video chose
  if(videoChoose) {
    return <VideoContainer
      video={video}
      user_id={userId}
      backToOptions={backToOptions}
    />
  }
  //* else render button
  return (
    <div>
      <h2>video List</h2>
      {
        videoArr.map(e => (
          <button onClick={() => videoChosen(e.id)} key={e.id}>
            {e.title}
          </button>
        ))
      }
    </div>
  )

}

export default VideoPage
