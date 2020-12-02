import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import API from '../../utils/API';
import FavoriteContainer from '../../components/FavoriteContainer'
function FavoritePage() {
  //* useLoation to get the value form state
  const location = useLocation();
  const { user_id } = location.state;
  // console.log('From favorite page',user_id);
  const [userId, setUserId] = useState();
  const [favoriteList, setFavoriteList] = useState([]);
  const [favorite, setFavorite] = useState({});
  const [favoriteChoose, setFavoriteChoose] = useState(false);
  const [loading, setLoading] = useState(true);

  //* API call for getting the data from database based on user _id
  const loadFavoriteList = () => {
    API.favorite(user_id)
      .then(e => {
        console.log(e);
        if(e.status === 200) {
          setFavoriteList(e.data);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  //* change state to the chosen favorite info
  const handleChoose = async (_id) => {
    let favoriteInfo = favoriteList.filter(e => e._id === _id);
    await setFavorite(favoriteInfo[0]);
    await setFavoriteChoose(true);
    console.log(favoriteInfo);
  }
  //* make sure all data has been loaded
  const checkLoading = async () => {
    await loadFavoriteList();
    await setUserId(user_id);
    await setLoading(false);
    // console.log(favoriteList);
  }
  //* change favoriteChoose state to re-render the component
  const backToOptions = async () => {
    await setFavoriteChoose(false);
  }
  //* run once when component load
  //* ComponentDidMount in class component
  useEffect(() => {
    checkLoading();
  }, []);
  //* run every time when favoriteChoose and favorite state changed
  //* ComponentDidUpdate in class component
  useEffect(() => {
    checkLoading();
  }, [favoriteChoose, favorite]);

  if(loading) {
    return <h1>Loading ...</h1>
  }

  if(favoriteChoose) {
    return <FavoriteContainer
      favorite={favorite}
      backToOptions={backToOptions}
    />
  }

  return (
    <div>
      <h1>Favorite List</h1>
      <h2>user id: {userId}</h2>
      {
        favoriteList.map(e => (
          <button onClick={() => handleChoose(e._id)}>
            {e.title}
          </button>
        ))
      }
      <Link to={{ pathname: '/age', state: { user_id: userId } }}>
        <button>Back to AgePicker</button>
      </Link>
    </div>
  )
}

export default FavoritePage
