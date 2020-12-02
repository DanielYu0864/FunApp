const Button = props => {

  const buttonStyle = {};

  if (props.color) buttonStyle.backgroundColor = props.color;
  if (props.border) buttonStyle.borderColor = props.border;

  const cssClass = `category__btn${props.border ? ' with-border' : ''}`

  return <button className={cssClass} onClick={props.onClick} style={buttonStyle}>{props.children}</button>

}

export default Button;