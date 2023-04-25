import React from 'react'
import placeHolderFundraiser from '../../imgs/placeHolderFundraiserPic.jpg';


const FundraiserDisplaySection = (props) => {
  return (
    <div className='w-96 h-fit bg-green-600 truncate text-white rounded-lg'>
        <img 
          src={props.fundraiserImg == null ? placeHolderFundraiser : props.fundraiserImg} 
          className='w-full h-48 object-cover'
          alt="Logo"
        />
        <div className='p-4'>
            <h1 className='text-2xl truncate'>{props.title}</h1>
            <p className='mb-4 text-sm'>Created on: {props.createdDate}</p>
            <p className='truncate '>{props.description}</p>
        </div>
    </div>
  )
}

export default FundraiserDisplaySection;
