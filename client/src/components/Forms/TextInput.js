import React from 'react'

const TextInput = ({value, handleInputChange, type, hint, label, placeholder, name}) => {


    return (
        <div className="form__input">
            <label className="form__input-label">{label || ''}</label>
            <input
                name={name}
                type={type || "text"}
                className="form__input-input"
                placeholder={placeholder || ''}
                value={value}
                onChange={handleInputChange}
            />
            <p className="form__input-hint">{hint}</p>
        </div>
    )

}

export default TextInput;