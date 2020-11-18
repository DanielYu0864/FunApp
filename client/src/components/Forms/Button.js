const Button = props => {

  let style = "form__btn";

  if (props.color) style += ` ${props.color}`;

  return <button className={style}>{props.children}</button>

}

export default Button;