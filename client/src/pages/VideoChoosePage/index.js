import React, { useState, useEffect } from 'react';
import videosJSON from '../../utils/videos.json';
import VideoPage from '../../components/VideoPage';
import { useLocation } from 'react-router-dom';
function VideoChoosePage() {
  const location = useLocation();
  const { age } = location.state;
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const changeState = (videoList) => {
    let ageFilter = filterAge(videoList, age)
    setVideoList([...ageFilter]);
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

  useEffect(() => {
    let videoList = videosJSON;
    changeState(videoList);
  },[])

  if(loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <VideoPage videoList={videoList}/>
    </div>
  )
}

export default VideoChoosePage


// export class VideoChoosePage extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        videoList: [],
//        loading: true
//     }
//   }

//   changeState = (videoList) => {
//     this.setState({
//       videoList: [...videoList],
//       loading: false
//     })
//   }

//   componentDidMount() {
//     let videoList = videosJSON;
//     this.changeState(videoList);
//   }

//   render() {
//     if(this.state.loading) {
//       return <h1>Loading...</h1>
//     }
//     return (
//       <div>
//         <VideoPage videoList={this.state.videoList}/>
//       </div>
//     )
//   }
// }

// export default VideoChoosePage
