import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import API from '../../utils/API';
import FavoriteContainer from '../../components/FavoriteContainer';
import ActionButton from '../../components/ActionButton';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Category/Button';

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
    <main>
        <Navbar color='white' />
        <section className='category favorite'>
          <h2 className='category__title'>Favorites List</h2>
          <h3 className="category__message">Click <span>"save"</span> on a game or video to store favorites here</h3>
          <div className="actions">
            <ActionButton link={{ pathname: '/age', state: { user_id: userId } }} color="#333">Back to Age Picker</ActionButton>
          </div>
        </section>
    </main>
  )
  }
  //* map loop through every object in the array

  return (
    <main>
        <Navbar color='white' />
        <section className='category favorite'>
          <h2 className='category__title'>Favorites List</h2>
            <div className='category__container'>
                {
                  favoriteList.map(e => (
                    <Button border='#fff' color='#358f19' onClick={() => handleChoose(e._id)} key={e.id}>{e.title}</Button>
                    ))
                }
            </div>
            <div className="actions">
              <ActionButton link={{ pathname: '/age', state: { user_id: userId } }} color="#333">Back to Age Picker</ActionButton>
            </div>
        </section>
    </main>
  )

}

export default FavoritePage
