import React, { useEffect } from 'react'
import { useStepperContext } from '../contexts/StepperContext'
import { states } from './States'

const BankInfo = () => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "Zipcode" && value.length > 5){
      return;
    }
    if(name === "Account_Num" && value.length > 12){
      return;
    }
    if(name === "Routing_Num" && value.length > 9){
      return;
    }
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <div className='flex flex-col relative'>
        <div className='pb-8'>
          <div className='pb-8 text-xl'>
            Personal Information
          </div>
          <div className='pl-2'>
            Account Name:
          </div>
          <div className='pb-8'>
            <label className='flex justify-center'>
              <input
                onChange={handleChange}  
                value={userData["Account_Name"] || ""}
                name="Account_Name"
                placeholder="Full Name"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                required
              />
            </label>
          </div>

          <div className='pl-2'>
            Address:
          </div>
          <div className='pb-8'>
            <label className='flex justify-center'>
              <input
                onChange={handleChange}  
                value={userData["Address"] || ""}
                name="Address"
                placeholder="Number, street name, and any additional details"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                required
              />
            </label>
          </div>

          
          <div className='flex flex-wrap justify-between'>
            <div>
              <div className='pl-2'>
                City:
              </div>
              <label className='flex justify-center pb-8'>
                <input
                  onChange={handleChange}  
                  value={userData["City"] || ""}
                  name="City"
                  placeholder="City of residence"
                  type="text"
                  className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                  required
                />
              </label>
            </div>
            
            <div>
              <div className='pl-2'>
                State:
              </div>
              <label className='flex justify-center pb-8'>
                <select
                  onChange={handleChange}
                  value={userData["State"] || ""}
                  name="State"
                  className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                  required
                >
                  <option value="" disabled selected>Select a State</option>
                  {states?.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div>
              <div className='pl-2'>
                Zipcode:
              </div>
              <label className='flex justify-center pb-8'>
                <input
                  onChange={handleChange}  
                  value={userData["Zipcode"] || ""}
                  name="Zipcode"
                  placeholder="XXXXX"
                  type="number"
                  className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                  required
                />
              </label>
            </div>
            
          </div>
        </div>
        

        <div className='pb-8 text-xl'>
          Bank Information
        </div>
        <div className='pl-2'>
            Bank Name
          </div>
        <label className='flex justify-center pb-8'>
          <input
            onChange={handleChange}  
            value={userData["Bank_Name"] || ""}
            name="Bank_Name"
            placeholder="Enter the Financial Institution Name"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
            required
          />
        </label>
        <div className='flex flex-wrap justify-between '>
          <div>
            <div className='pl-2'>
              Account Number
            </div>
            <label className='flex justify-center pb-8'>
              <input
                onChange={handleChange}  
                value={userData["Account_Num"] || ""}
                name="Account_Num"
                placeholder="XXXXXXXXXXXX"
                type="number"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                required
              />
            </label>
          </div>
          
          <div>
            <div className='pl-2'>
              Routing Number
            </div>
            <label className='flex justify-center pb-8'>
            <input
              onChange={handleChange}  
              value={userData["Routing_Num"] || ""}
              name="Routing_Num"
              placeholder="XXXXXXXXX"
              type="number"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
              required
            />
          </label>
          </div>
          
          <div className='pr-0 pl-2 md:pr-8'>
            <div className=''>
              Account Type:
            </div>
            <label className='flex justify-center pb-8'>
              <select
                onChange={handleChange}
                value={userData["Account_Type"] || ""}
                name="Account_Type"
                placeholder='Account Type'
                className="w-full appearance-none p-1  text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                required
              >
                <option value ="" disabled selected>Select</option>
                <option value="Checking">Checking</option>
                <option value="Savings">Savings</option>
              </select>

            </label>
          </div>
          
        </div>
        
        
      </div>
    </div>
  )
}

export default BankInfo