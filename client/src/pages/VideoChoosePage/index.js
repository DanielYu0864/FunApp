import React, { useState, useEffect } from 'react';
import videosJSON from '../../utils/videos.json';
import VideoPage from '../../components/VideoPage';
import { useLocation, Link } from 'react-router-dom';
import ActionButton from '../../components/ActionButton';
function VideoChoosePage() {
  //* use location react router dom to get the value
  const location = useLocation();
  const { age, user_id } = location.state;
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  //* make ure datas are loaded
  const changeState = async (videoList) => {
    let ageFilter = await filterAge(videoList, age)
    await setVideoList([...ageFilter]);
    await setLoading(false);
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
      <div className="actions">
        <ActionButton link={{ pathname: '/favorite', state: { user_id: user_id } }} />
        <ActionButton link={{ pathname: '/media', state: { age: age, user_id: user_id } }} color="#333">Back To Media</ActionButton>
      </div>
    </div>
  )
}

export default VideoChoosePage
