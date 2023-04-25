import React from 'react'
import { FcApproval } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const ApprovedDonationWindow = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col text-center p-8 bg-gray-100 '>
        <div className='font-semibold text-5xl p-8'>
            Approved!
        </div>
        <div className='flex justify-center'>
            <FcApproval size={200}/>
        </div>
        
        <div className='font-semibold text-2xl p-8 '>
            Thank you for your support!
        </div>
        <div className='p-8'>
            <button className='bg-green-500 hover:bg-green-700 duration-200 text-white font-bold p-4 rounded' onClick={() => navigate(-2)}>Return to Fundraiser</button>
        </div>
    </div>
  )
}

export default ApprovedDonationWindow