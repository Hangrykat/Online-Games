import React from 'react'
import '../App.css'

function Button(props) {
    return (
        <div classname="button">
           <button {...props}>{props.label}</button> 
        </div>
    )
}

export default Button
