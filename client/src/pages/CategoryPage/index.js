import React, {useEffect, useState} from 'react'
import { useLocation, Link } from 'react-router-dom';
import CategoryContainer from '../../components/CategoryContainer'
import Button from '../../components/Category/Button';
import media03JSON from '../../utils/media03.json';
import ActionButton from '../../components/ActionButton';
function CategoryPage() {
  const location = useLocation();
  const { user_id, type } = location.state ?? 'fun';
  const [upperType, setUpperType] = useState();
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);
  //* make sure data is loaded
  const changeState = async (mediaList) => {
    let typeFilter = filterType(mediaList, type);
    await setMediaList([...typeFilter]);
    await setLoading(false);
  }
  //* filter the element by type
  const filterType = (inputArr, inputType) => {
    const outputArr = [];
    for(let i = 0; i < inputArr.length; i++) {
      let type = inputArr[i].type.split(', ').filter(e => e === inputType).join('');
      if(type === inputType) outputArr.push(inputArr[i]);
    }
    return outputArr;
  }
  //* change the input string first character to upper case
  const toUpper = (input) => {
    let upper = input[0].toUpperCase() + input.substring(1)
    setUpperType(upper);
  }
  //* componentDidMount in Class component
  useEffect(async () => {
    let mediaList = media03JSON;
    await toUpper(type);
    await changeState(mediaList);
  }, []);
  //* check the page is loaded
  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <CategoryContainer type={upperType} mediaList={mediaList} user_id={user_id}/>

      <div className="actions">
        <ActionButton color="#48cb1f" link={{ pathname: '/favorite', state: { user_id: user_id } }} />
        <ActionButton link={{ pathname: '/category', state: { user_id: user_id } }} color="#333">Back To Age</ActionButton>
      </div>
    </div>
  )
}

export default CategoryPage;
