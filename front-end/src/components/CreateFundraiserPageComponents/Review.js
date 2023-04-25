import React from 'react'
import { useStepperContext } from '../contexts/StepperContext'

const Preview = () => {
  const { userData, setUserData } = useStepperContext();
  
  // const checkString = typeof userData.Zipcode === "string" ? console.log("true") : console.log("false")

  return (
    <div>
      <div className='border-b'>
        <div className='text-2xl pb-4'>
          Fundraiser Details: 
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2 pb-8'>
            <div className='font-bold'>
              Title: 
            </div>
            <div>
              {userData.Title}
            </div>
          </div>
          <div className='w-full lg:w-1/2 pb-8'>
            <div className='font-bold'>
              GoalTargetAmount: 
            </div>
            <div>
              ${userData.GoalTargetAmount}
            </div>
          </div>
        </div>

        <div>
          <div className='font-bold'>
            Description: 
          </div>
          <div className='pb-8 w-fit'>
            {userData.Description}
          </div>
        </div>

        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/3 pb-8'>
            <div className='font-bold pb-1'>
              Fundraiser Tags:
            </div>
            <div>
              {/* {JSON.stringify(userData.tags)} */}
              {
                userData.tags?.map((tag, index) => {
                  return (
                    <span key={index} className='mr-4 p-1 bg-green-500 text-white'>
                      {tag}
                    </span>
                  )
                })
              }
            </div>
          </div>
          <div className='w-full lg:w-1/3 pb-8'>
            <div className='font-bold'>
              Fundraiser Image:
            </div>
            <div className='pb-8'>
              {userData.FundraiserImage?.name !== undefined ? userData.FundraiserImage.name : "No Image"}
            </div>
          </div>
          <div className='w-full lg:w-1/3 pb-8'>
            <div className='font-bold'>
              Planned End Date:
            </div>
            <div className='pb-8'>
              {userData.PlannedEndDate}
            </div>
          </div>
        </div>
      </div>
      

      <div className='text-2xl pb-4 pt-8'>
        Bank Details: 
      </div>

      <div className='flex flex-wrap justify-between pr-4'>
          <div className='w-full lg:w-1/3 '>
            <div className='font-bold'>
              Account Name:
            </div>
            <div className='pb-8'>
              {userData.Account_Name}
            </div>
          </div>
          <div className='w-full lg:w-1/3 '>
            <div className='font-bold'>
              Address:
            </div>
            <div className='pb-8'>
              {userData.Address}
            </div>
          </div>
          <div className='w-full lg:w-1/3 '>
            <div className='font-bold'>
              City:
            </div>
            <div className='pb-8'>
              {userData.City}
            </div>
          </div>
      </div>
      
      <div className='flex flex-wrap justify-between pr-4'>
        <div className='w-full lg:w-1/3 '>
            <div className='font-bold'>
              State:
            </div>
            <div className='pb-8'>
              {userData.State}
            </div>
        </div>
        <div className='w-full lg:w-1/3 '>
            <div className='font-bold'>
              Zipcode: 
            </div>
            <div className='pb-8'>
              {userData.Zipcode}
            </div>
        </div>
        <div className='w-full lg:w-1/3 '>
            <div className='font-bold'>
              Bank_Name: 
            </div>
            <div className='pb-8'>
              {userData.Bank_Name}
            </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-between pr-4'>
        <div className='w-full lg:w-1/3 '>
            <div className='font-bold'>
              Account_Num: 
            </div>
            <div className='pb-8'>
              {userData.Account_Num}
            </div>
        </div>
        <div className='w-full lg:w-1/3 '>
            <div className='font-bold'>
              Routing_Num: 
            </div>
            <div className='pb-8'>
              {userData.Routing_Num}
            </div>
        </div>
        <div className='w-full lg:w-1/3 '>
            <div className='font-bold'>
              Account_Type: 
            </div>
            <div className='pb-8'>
              {userData.Account_Type}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Preview