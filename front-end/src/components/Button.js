import React from 'react';
// import PropTypes from "prop-types"

// the ...props is a spread operator
// it takes all the props and puts them into the button
const Button = ({ title, ...props }) => {
  return (
    <button 
      className="bg-green-500 text-white py-2 px-4 hover:bg-green-700 duration-200 rounded-lg" 
      onClick={props.click}
    // {...props}
    >
      {title}
    </button>
  );
};

export default Button;

