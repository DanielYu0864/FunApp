const Button = props => {

  const buttonStyle = {
    backgroundColor: props.color
  }

  return (
    props.color ?
      <button className="category__btn" style={buttonStyle}>{props.children}</button>
      :
      <button className="category__btn">{props.children}</button>
  )

}

export default Button;