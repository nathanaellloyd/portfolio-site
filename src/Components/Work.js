import React from 'react'; 
import weddingsite from '../images/wedding-dj-site.png';

function Work () {

    return (

        <div className='work-square'>
        
        <div class="website-tile">
            <a href="https://practical-kilby-20d71b.netlify.app/">
                <p className="work-title">Wedding DJ Site</p>
                <img src={weddingsite} alt='linkedin' className="site-screenshot" />
                <p className="view">View</p>
            </a>
        </div>

        </div>
    )
}

export default Work; 