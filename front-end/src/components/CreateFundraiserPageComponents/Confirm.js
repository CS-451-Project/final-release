import React from 'react'
import { useStepperContext } from '../contexts/StepperContext'
import { useNavigate } from 'react-router-dom'

const Confirm = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = useStepperContext();
  const userId = localStorage.getItem("userId")
  const formData = new FormData();
  formData.append('FundraiserImage', userData.FundraiserImage);

  const handleClick = () => {
    navigate(`/organizer/${userId}/fundraiser/${sessionStorage.getItem('fundraiserId')}`)
  }
  
  return (
    <div className='flex justify-center flex-col'>
      <div className='text-center pb-8 text-2xl'>
        Congratulations! You have successfully created a fundraiser!
      </div>
      <div className="cursor-pointer mt-4 mb-8 flex justify-center">
          <button
           className='w-fit p-4 rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase 
          text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white'
            onClick={handleClick}
          >
              Go to your Fundraiser
          </button>
      </div>
    </div>
    
  )
}

export default Confirm