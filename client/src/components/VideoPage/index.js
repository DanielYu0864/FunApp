import React, {useState, useEffect}from 'react';
import VideoContainer from '../VideoContainer';
import Button from '../Category/Button';
import Navbar from '../Navbar/Navbar';
function VideoPage({videoList, user_id}) {
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
  }, [video])
  //* make sure loading properly
  const checkLoading = async () => {
    await setVideoArr(videoList);
    await setUserId(user_id);
    await setLoading(false);
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
    <main>
        <Navbar color='rgb(87, 110, 103)' />
        <section className='category videos'>
          <h2 className='category__title alt'>Videos</h2>
            <div className='category__container'>
                {
                  videoArr.map(e => (
                    <Button border='#fff' color='cornflowerblue' onClick={() => videoChosen(e.id)} key={e.id}>{e.title}</Button>
                  ))
                }
            </div>
        </section>
    </main>
  )

}

export default VideoPage
