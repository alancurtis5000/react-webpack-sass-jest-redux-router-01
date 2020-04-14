import React from 'react';

const click = () => {
  console.log("clicked");
}

const Button = () => {return(
  <div>
    <button onClick={click}>Push me</button>
  </div>
)}

export default Button;