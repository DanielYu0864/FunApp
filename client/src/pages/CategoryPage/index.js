import React, {useEffect, useState} from 'react'
import CategoryContainer from '../../components/CategoryContainer'
import { useLocation, Link } from 'react-router-dom';
import Button from '../../components/Category/Button';
import videoJSON from '../../utils/videos.json';
function CategoryPage() {
  const location = useLocation();
  const { user_id, type } = location.state ?? 'food';
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const changeState = (videoList) => {
    let typeFilter = filterType(videoList, type);
    setVideoList([...typeFilter]);
    console.log('Type Filter from Category Page: ',typeFilter)
    setLoading(false);
  }

  const filterType = (inputArr, inputType) => {
    const outputArr = [];
    for(let i = 0; i < inputArr.length; i++) {
      let type = inputArr[i].type.split(', ').filter(e => e === inputType).join('');
      if(type === inputType) outputArr.push(inputArr[i]);
    }
    return outputArr;
  }

  useEffect(() => {
    let videoList = videoJSON;
    changeState(videoList);
  }, []);

  if(loading) {
    return <h1>Loading...</h1>
  }

  console.log('From Category: ', type)
  return (
    <div>
      <CategoryContainer videoList={videoList} user_id={user_id}/>
      Category Page
      <Link to={{ pathname:'/category', state:{user_id: user_id} }}>
        <button>Back to Category</button>
      </Link>
    </div>
  )
}

export default CategoryPage;
