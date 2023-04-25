import React, { useEffect, useState } from 'react'
import { useStepperContext } from '../contexts/StepperContext'
import TagsInput from 'react-tagsinput'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const FundraiserDetails = () => {
  const { userData, setUserData } = useStepperContext();
  const [selected, setSelected] = useState(userData.tags);
  const [file, setFile] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setUserData({ ...userData, FundraiserImage: e.target.files[0] });
  };

  const handleTags = (tags) => {
      setSelected(tags);
      setUserData({ ...userData, tags: tags });
  };
  
  return (
    <div>
      <div className='flex flex-col relative'>
        <div>
          Title
        </div>
        <div className='pb-8'>
          <label className='flex justify-center'>
            <input
              onChange={handleChange}
              value={userData["Title"] || ""}
              name="Title"
              placeholder="Name your cause"
              type="text"
              className="w-full appearance-none p-2 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
              required
            />
          </label>
        </div>
        <div>
          Description
        </div>
        <div className='pb-8 '>
          <label className='flex justify-center'>
            <textarea
              onChange={handleChange}
              value={userData["Description"] || ""}
              name="Description"
              placeholder="Tell us more about your cause"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border h-48 transition-colors duration-300 focus:border-green-500"
              required
            />
          </label>
        </div>
        
        <div className='flex flex-wrap'>
          <div className='w-full sm:w-1/2 pb-4'>
            <div>
              How much do you need to raise?
            </div>
            <label>
              <div className='absolute mt-1 ml-1'>$</div>
              <input
                onChange={handleChange}
                value={userData["GoalTargetAmount"] || ""}
                name="GoalTargetAmount"
                placeholder="0.00"
                type="number"
                step="0.01"
                min="1" 
                maxLength={3}
                className="w-3/4 appearance-none p-1 pl-4 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                required
              />
            </label>
          </div>
          <div className='w-full sm:w-1/2 pb-4'>
            <div>
              Planned End Date
            </div>
            <label>
              <input
                onChange={handleChange}
                value={userData["PlannedEndDate"] || ""}
                name="PlannedEndDate"
                placeholder="Planned End Date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="w-3/4 appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                required
              />
            </label>
          </div>
        </div>

        <div className='pt-4'>
          <label>
            <TagsInput 
              value={selected != null ? selected : []} 
              onChange={handleTags} 
              className='border p- transition-colors duration-300 focus:border-green-500' 
              maxTags = {5}
              tagProps={{ 
                className: 'bg-green-500 text-white rounded-lg p-2 m-1 border-none inline-block before:content-[" ×"]',
                classNameRemove: 'cursor-pointer font-bold'
              }}
              inputProps={{
                placeholder: 'Add up to 5 tags', 
                className: 'bg-transparent border-none text-gray-700 font-sans text-base font-medium mb-6 mt-1 outline-none p-2 w-80'
              }}
              required
            />
            <div className='text-sm pl-2 italic pb-8'>
              press enter to add a tag, backspace to delete
            </div>
          </label>
        </div>
        <div>
          <div>
            Fundraiser Image:
          </div>
          <div className='bg-white border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 focus:outline-none'>
            <label class="flex justify-center flex-col w-full h-48 px-4 transition appearance-none cursor-pointer">        
                <span class="flex justify-center items-center space-x-2">
                  <div className=''>
                    <AiOutlineCloudUpload size={24} />
                  </div>
                  <span class="font-medium text-gray-600">
                      Drop JPG file to Attach, or browse
                  </span>
                </span>
                <input
                  onChange={handleFile}
                  name="FundraiserImage"
                  placeholder="FundraiserImage"
                  type="file"
                  className='hidden'
                  accept=".jpg"
                />
            </label>
            <div className='bg-gray-200 text-lg'>
              {file?.size > 1000000 ? "File size too large" : file != null ? file.name : "No file chosen"}
            </div>
          </div>
          
        </div>
        
      </div>

    </div>
  )
}

export default FundraiserDetails