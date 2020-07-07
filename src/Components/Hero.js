import React, { Fragment } from 'react'; 
import nate from '../images/logome.png'; 

function Hero() {

    const Emoji = props => (
        <span
          className="emoji"
          role="img"
        >
          {props.symbol}
        </span>
      )

    return (
        <Fragment>
            <div className="blue-square">
                <div className="hero-title-contents">
                <h1 className="nate-lloyd">nate lloyd</h1>
                <h2 className="web-developer">web developer<Emoji symbol="👨‍💻"/></h2>
                <img src={nate} alt="me" className="website-icon"/> 
                </div>
            </div>
        </Fragment>
    )

}

export default Hero; 