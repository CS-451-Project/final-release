import React, { useState } from 'react'
import placeHolderFundraiser from '../../imgs/placeHolderFundraiserPic.jpg';
import { Link } from 'react-router-dom';
import {  useParams, useNavigate } from "react-router-dom";

const UserFundraiserDisplaySection = (props) => {
  var base64 = require('base-64');
  const {userId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    if(window.confirm('Are you sure you wish to delete this fundraiser?')){
      // delete the fundraiser
      fetch(`https://localhost:7000/api/user/${userId}/fundraiser/${props.fundraiserId}/close`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Basic ${base64.encode(`${localStorage.getItem("AuthHeader")}`)}`
        },
        })
        // head
        .then(response => {
            console.log(response)
        })
        .then(data => {
            console.log(data)
            window.location.reload();
        })
    }
  };

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
            <p className='line-clamp-6'>{props.description}</p>
          <div className='flex pt-4 justify-center pb-1'>
            {/* Link to the fundraiser page */}
            <Link to={`/organizer/${props.organizerId}/fundraiser/${props.fundraiserId}`} data-testid='link-to-fundraiser'>
              <div className='flex flex-inline'>
                  <button className='bg-gray-200 text-black text-lg rounded py-1 px-8 hover:bg-gray-300 duration-200'>View</button>
              </div>
            </Link>
            <div className='flex flex-inline pl-2'>
                <button className='bg-gray-200 text-black text-lg rounded py-1 px-8 hover:bg-gray-300 duration-200' onClick={() => navigate(`/organizer/${userId}/fundraiser/${props.fundraiserId}/edit`)}>Edit</button>
            </div>
            <div className='flex flex-inline pl-2'>
                <button className='bg-gray-200 text-black text-lg rounded py-1 px-8 hover:bg-gray-300 duration-200' onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserFundraiserDisplaySection;
