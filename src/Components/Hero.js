import React, { Fragment } from 'react'; 
import nate from '../images/logome.png'; 
import github from '../images/GH.png'; 
import linkedin from '../images/linkedin.png';
import medium from '../images/medium.png'; 

function Hero() {

    return (
        <Fragment>
            <div className="blue-square">
                <div className="hero-title-contents">
                <a href="https://www.linkedin.com/in/nathanael-lloyd-58a558144/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt='linkedin' className="li-hero" />
                </a> 
                <a href="https://github.com/natelloyd1" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt='github' className="gh-hero"/>
                </a>
                <a href="https://medium.com/@nathanaellloyd/" target="_blank" rel="noopener noreferrer">
                    <img src={medium} alt='medium' className="med-hero" />
                </a>
                <h1 className="nate-lloyd">nate lloyd</h1>
                <h2 className="web-developer">web developer</h2>
                <img src={nate} alt="me" className="website-icon"/> 
                </div>
            </div>
        </Fragment>
    )

}

export default Hero; 