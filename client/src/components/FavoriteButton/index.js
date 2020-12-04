import React from 'react'

const FavoriteButton = props => {

  const buttonStyle = {
    backgroundColor: props.color
  }

  return (
    props.color ?
      <div className="favorite-button" style={buttonStyle}>Favorite</div>
      :
      <div className="favorite-button">Favorite</div>
  )

}

export default FavoriteButton
