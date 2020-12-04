import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import API from '../../utils/API';
import FavoriteContainer from '../../components/FavoriteContainer'
function FavoritePage() {
  //* useLoation to get the value form state
  const location = useLocation();
  const { user_id } = location.state;
  const [userId, setUserId] = useState();
  const [favoriteList, setFavoriteList] = useState([]);
  const [favorite, setFavorite] = useState({});
  const [favoriteChoose, setFavoriteChoose] = useState(false);
  const [loading, setLoading] = useState(true);

  //* API call for getting the data from database based on user _id
  const loadFavoriteList = () => {
    API.favorite(user_id)
      .then(e => {
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
  }
  //* make sure all data has been loaded
  const checkLoading = async () => {
    await loadFavoriteList();
    await setUserId(user_id);
    await setLoading(false);
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
  //* check if page loaded
  if(loading) {
    return <h1>Loading ...</h1>
  }
  //* check if favorite is chosen
  if(favoriteChoose) {
    return <FavoriteContainer
      user_id={userId}
      favorite={favorite}
      backToOptions={backToOptions}
    />
  }
  //* chek if favorite list not empty
  if(!favoriteList.length) {
    return (
      <div>
      <h1>Favorite List</h1>
      <h1>Click <button>save</button> to store favorites here</h1>
      <Link to={{ pathname: '/age', state: { user_id: userId } }}>
        <button>Back to AgePicker</button>
      </Link>
    </div>
    )
  }
  //* map loop through every object in the array
  return (
    <div>
      <h1>Favorite List</h1>

      {

        favoriteList.map(e => (

          <button onClick={() => handleChoose(e._id)}>
            {e.title}
          </button>
        ))
      }
      <Link to={{ pathname: '/age', state: { user_id: userId } }}>
        <button>Back</button>
      </Link>
    </div>
  )
}

export default FavoritePage
