import React, { Component } from 'react';
import videosJSON from '../../utils/videos.json';
import VideoPage from '../../components/VideoPage';
export class VideoChoosePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
       videoList: [],
       loading: true
    }
  }

  changeState = (videoList) => {
    this.setState({
      videoList: [...videoList],
      loading: false
    })
  }

  componentDidMount() {
    let videoList = videosJSON;
    this.changeState(videoList);
  }

  render() {
    if(this.state.loading) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <VideoPage videoList={this.state.videoList}/>
      </div>
    )
  }
}

export default VideoChoosePage
