import React, { useState } from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

function Contact() {

    const [name, setName] = useState('');
    const handleName = e => {
      setName(e.currentTarget.value);
      };
    
    const [subject, setSubject] = useState('');
    const handleSubject = e => {
        setSubject(e.currentTarget.value); 
    }

	const [email, setEmail] = useState('');
	const handleEmail = e => {
		setEmail(e.currentTarget.value);
	};

	const [message, setMessage] = useState('');
	const handleMessage = e => {
		setMessage(e.currentTarget.value);
  };
  
  const sendEmail = e => {
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...useState })
    }) 
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
    console.log((name), (email), (message)); 
  };

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
      <p>nathanaellloyd@live.com<Emoji symbol="✉️"/></p>
      <p>07879 698 398<Emoji symbol="📱"/></p>
    </div>

    <form onSubmit={ sendEmail } name="contact" action="/" method="POST" data-netlify="true" >

        <div className="input-wrap">

			<legend>Name</legend>
          <input
            value={ name }
            type='text'
            name='name'
            onChange={ handleName }
          />
        </div>

        <div className="input-wrap">   
          <legend>Email</legend>
            <input
              value={ email }
              type='email'
              name='email'
              onChange={ handleEmail }
            />
        </div>

        <div className="input-wrap">  
          <legend>Subject</legend>
            <input
              value={ subject }
              type='subject'
              name='subject'
              onChange={ handleSubject }
            />
        </div>
            
        <div className="input-wrap">  
          <legend>Message</legend>
            <textarea
              className="msg-box"
              value={ message }
              name='message'
              onChange={ handleMessage }
				/>
        </div>

			<input className='input-button' type='submit' value="Send" />

		  </form>


      </div>

      </div>

        </>
        
    );
  }

export default Contact; 
