import React from 'react'

const TextError = (props) => {
   
   
    return (
        <div className='invalid-feedback'>
            {props.children}
        </div>
    )
}

export default TextError
