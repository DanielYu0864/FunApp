import React, { useState, useEffect } from 'react';
import videosJSON from '../../utils/videos.json';
import VideoPage from '../../components/VideoPage';
import { useLocation, Link } from 'react-router-dom';
import FavoriteButton from '../../components/FavoriteButton';
function VideoChoosePage() {
  //* use location react router dom to get the value
  const location = useLocation();
  const { age, user_id } = location.state;
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const changeState = (videoList) => {
    let ageFilter = filterAge(videoList, age)
    setVideoList([...ageFilter]);
    console.log('ageFilter', ageFilter);
    setLoading(false);
  };
  //* function for filter the video list by user age
  const filterAge = (inputArr, inputAge) => {
    const outputArr = [];
    for(let i = 0; i < inputArr.length; i++) {
      let age = inputArr[i].age.split(', ').filter(e => e === inputAge || e === 'all').join('');
      if(age === inputAge || age === 'all') outputArr.push(inputArr[i]);
    }
    return outputArr;
  }
  //* componentdidmount
  useEffect(() => {
    let videoList = videosJSON;
    changeState(videoList);
  },[])
  //* check loading...
  if(loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <VideoPage videoList={videoList} user_id={user_id}/>
      <Link to={{ pathname: '/media', state: { age: age, user_id: user_id } }}>
        <button>Back to media</button>
      </Link>
      <Link to={{ pathname: '/favorite', state: { user_id: user_id } }}>
        <FavoriteButton/>
      </Link>
    </div>
  )
}

export default VideoChoosePage
