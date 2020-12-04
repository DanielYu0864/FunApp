import React, {useState, useEffect} from 'react'
import Button from '../Category/Button';
import Navbar from '../Navbar/Navbar';
import VideoContainer from '../VideoContainer';

function CategoryContainer({mediaList, user_id, type}) {
  //* set state
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(true);
  const [mediaArr, setMediaArr] = useState([]);
  const [media, setMedia] = useState({});
  const [mediaChoose, setMediaChoose] = useState(false);

  //* re-render component everytime when state changed
  useEffect(() => {
    if(mediaList !== []) {
      checkLoading();
    }
  });
  //* re-render component when media chose
  useEffect(() => {
    checkLoading();
  }, [mediaChoose, media]);
  //* make sure loading properly
  const checkLoading = async () => {
    await setMediaArr(mediaList);
    await setUserId(user_id);
    await setLoading(false);
  }
  //* change media state to the media data when button click
  const mediaChosen = async (id) => {
    let mediaInfo = mediaArr.filter(e => e.id === id);
    await setMedia(mediaInfo[0]);
    await setMediaChoose(true);
  };

  //* back to the media choose page
  const backToOptions = async () => {
    await setMediaChoose(false);
  }
  //* check loading
  if(loading === true) {
    console.log('loading from media page')
    return <h1>Loading ...</h1>
  }
  //* check media chose
  if(mediaChoose) {
    return <VideoContainer
      video={media}
      user_id={userId}
      backToOptions={backToOptions}
    />
  }
  //* functional loop through the array and render the components

  return (
    <main>
        <Navbar color='white' />
        <section className='category type'>
          <h2 className='category__title'>{type}</h2>
            <div className='category__container'>
                {
                  mediaArr.map(e => (
                    <Button border='#fff' color='#805ad5' onClick={() => mediaChosen(e.id)} key={e.id}>{e.title}</Button>
                  ))
                }
            </div>
        </section>
    </main>
  )
}

export default CategoryContainer;
