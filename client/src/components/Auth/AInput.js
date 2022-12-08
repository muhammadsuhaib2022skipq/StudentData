import React from 'react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {TextField} from '@material-ui/core';

const Input = ({name, handleChange, label, autoFocus, handleShowPassword, type}) => {
  return (
    <div>
        <TextField
        fullWidth
        name={name}
        label={label}
        onChange={handleChange}
        required
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
            endAdornment: (
                <button onClick={handleShowPassword}>{type === 'password' ? <Visibility/> : <VisibilityOff/> }</button>
            )
        }: null}
        />
    </div>
  )
}

export default Input