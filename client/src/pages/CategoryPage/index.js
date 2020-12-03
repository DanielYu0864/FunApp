import React, {useEffect, useState} from 'react'
import CategoryContainer from '../../components/CategoryContainer'
import { useLocation, Link } from 'react-router-dom';
import Button from '../../components/Category/Button';
// import videoJSON from '../../utils/videos.json';
import media03JSON from '../../utils/media03.json';
function CategoryPage() {
  const location = useLocation();
  const { user_id, type } = location.state ?? 'fun';
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);

  const changeState = (mediaList) => {
    let typeFilter = filterType(mediaList, type);
    setMediaList([...typeFilter]);
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
    let mediaList = media03JSON;
    let arr = media03JSON;
    console.log(arr);
    changeState(mediaList);
  }, []);

  if(loading) {
    return <h1>Loading...</h1>
  }

  console.log('From Category: ', type)
  return (
    <div>
      <CategoryContainer mediaList={mediaList} user_id={user_id}/>
      <Link to={{ pathname:'/category', state:{user_id: user_id} }}>
        <button>Back</button>
      </Link>
    </div>
  )
}

export default CategoryPage;
