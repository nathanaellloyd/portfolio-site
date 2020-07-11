import React from 'react'; 

function Success() {


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
            <div className="success-square">
            <p className="success-message">Thank you for your message, you'll hear back from me soon <Emoji symbol="✌🏻"/></p>
            </div>  
        </>
    )

}

export default Success; 