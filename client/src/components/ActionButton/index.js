import React from 'react'
import { Link } from 'react-router-dom';

const ActionButton = props => {

  const buttonStyle = {}

  if (props.color) buttonStyle.backgroundColor = props.color;

  const button = <div className="actions__button" style={buttonStyle}>{props.children || 'Favorite'}</div>;

  return props.link ? <Link to={props.link}>{button}</Link> : button;

}

export default ActionButton
