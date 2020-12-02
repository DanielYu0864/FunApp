import React from 'react'

const FavoriteButton = props => {

  const buttonStyle = {
    backgroundColor: props.color
  }

  return (
    props.color ?
      <div className="favorite-button" style={buttonStyle} /*href={props.link}*/>Favorite</div>
      :
      <div className="favorite-button" /*href={props.link}*/>Favorite</div>
  )

}

export default FavoriteButton
