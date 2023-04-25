import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { useNavigate, useParams } from "react-router-dom";
import { FaRegEdit } from 'react-icons/fa'

const UserInfo = ({ props }) => {
    const {userId} = useParams();
    const navigate = useNavigate();
  return (
    <div>
        <div className='text-3xl pt-10 pb-4 w-fit '>Your Information</div>
        <div className=' bg-gray-100 w-fit p-8 rounded-lg'>
            <div className='flex flex-wrap justify-center'>
                <div className='grid place-items-center'>
                    <CgProfile  size={40} />
                </div>
                <div className='flex flex-col py-4 px-5'>
                    <div className='flex text-lg'>{props.firstName + " " + props.lastName}</div>
                    <div className='flex text-lg pt-2'>{props.email}</div>
                </div>
                <div className='grid place-items-center'>
                    <button onClick={() => navigate(`/dashboard/${userId}/edit`)} className=''>
                        {/* <img src={editButtonImage} className='w-8'></img> */}
                        <FaRegEdit 
                            size={40} 
                            className="text-green-500 hover:text-green-700 transition-colors duration-300"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default UserInfo