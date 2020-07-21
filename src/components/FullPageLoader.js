import React from 'react';
import Spinner from '../resources/images/loading.gif'

const FullPageLoader = () => {

    return (
    <div className="fp-container">
        <img src={Spinner} className="fp-loader" alt="loading"></img>
    </div>

    )
}

export default FullPageLoader; 