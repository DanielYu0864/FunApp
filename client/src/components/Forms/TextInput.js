import React from 'react'

const TextInput = ({value, handleInputChange, type, label, placeholder}) => {

    return (
        <div className="form__input">
            <label className="form__input-label">{label || ''}</label>
            <input
                type={type || "text"}
                className="form__input-input"
                placeholder={placeholder || ''}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    )

}

export default TextInput;