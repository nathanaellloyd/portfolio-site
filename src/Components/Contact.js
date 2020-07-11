import React from 'react';

function Contact() {

  const Emoji = props => (
    <span
      className="emoji"
      role="img"
    >
      {props.symbol}
    </span>
  )

  return (

    <>
    
    <div className="contact-square">

    <div className="form-wrap">
    
    <div className="small-contact-text">
      <p>nathanaellloyd@live.com <Emoji symbol="✉️"/></p>
      <p>07879 698 398 <Emoji symbol="📱"/></p>
    </div>

    <form name="contact" action="/success" method="POST" data-netlify="true" >
    <input type='hidden' name='form-name' value='contact' />

      
      <div className="input-wrap">
			<label htmlFor="yourname">
        Name
      </label>
          <input
            type='text'
            name='name'
            id="yourname"
          />
        </div>

        <div className="input-wrap">   
        <label htmlFor="youremail">
        Email
        </label>
            <input
              type='email'
              name='email'
              id="youremail"
            />
        </div>

        <div className="input-wrap">  
        <label htmlFor="yoursubject">
        Subject
        </label>
            <input
              type='subject'
              name='subject'
              id="yoursubject"
            />
        </div>
            
        <div className="input-wrap">  
        <label htmlFor="yourmessage">
        Message
        </label>
            <textarea
              className="msg-box"
              name='message'
              id="yourmessage"

				/>
        </div>

        <button type="submit" className="input-button">Send</button>

			{/* <input className='input-button' type='submit' value="Send" /> */}

		  </form>


      </div>

      </div>

        </>
        
    );
  }

export default Contact; 


