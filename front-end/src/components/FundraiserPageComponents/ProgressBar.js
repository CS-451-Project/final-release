import React from 'react';

// Progress bar component
const ProgressBar = (props) => {
    const { completed } = props;

    const containerStyles = {
      // height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
    }

    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      borderRadius: 'inherit',
      textAlign: 'right'
    }

    const labelStyles = {
      color: 'white',
      fontWeight: 'bold',
    }

    return (
      <div className='h-3' style={containerStyles}>
        <div className='bg-yellow-500' style={fillerStyles}>
          <span className="px-4" style={labelStyles}></span>
        </div>
      </div>
    );
};

export default ProgressBar