import React, { Fragment } from 'react'; 
import nate from '../images/logome.png'; 

function Hero() {

    return (
        <Fragment>
            <div className="hero-title">
                <div className="hero-title-contents">
                <h1 className="nate-lloyd">Nate Lloyd</h1>
                <h2 className="web-developer">Web Developer</h2>
                <img src={nate} alt="me" className="website-icon"/> 
                </div>
            </div>
        </Fragment>
    )

}

export default Hero; 