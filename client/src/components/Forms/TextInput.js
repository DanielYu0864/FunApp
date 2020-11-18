const TextInput = props => {

    return (
        <div className="form__input">
            <label className="form__input-label">{props.label || ''}</label>
            <input type={props.type || "text"} className="form__input-input" placeholder={props.placeholder || ''} />
        </div>
    )

}

export default TextInput;