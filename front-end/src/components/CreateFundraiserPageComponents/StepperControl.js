import React, { useState } from 'react'
import { useStepperContext } from '../contexts/StepperContext'

// controls the buttons for the multi-step form
// buttons are controled by the currentStep and the total number of steps
const StepperControl = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useStepperContext();
  var base64 = require('base-64');

  const fundraiser = {
    Title: userData.Title,
    Description: userData.Description,
    GoalTargetAmount: userData.GoalTargetAmount,
    PlannedEndDate: userData.PlannedEndDate,
    Tags: userData.tags,
  }

  const bankAccount = {
    Account_Name: userData.Account_Name,
    Address: userData.Address,
    City: userData.City,
    State: userData.State,
    Zipcode: userData.Zipcode?.toString(),
    Bank_Name: userData.Bank_Name,
    Account_Num: userData.Account_Num?.toString(),
    Routing_Num: userData.Routing_Num?.toString(),
    Account_Type: userData.Account_Type,
  }

  const createFundraiser = () => {
    sessionStorage.clear();
    // create the fundraiser
    fetch(`https://localhost:7000/api/user/${localStorage.getItem("userId")}/fundraiser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Basic ${base64.encode(`${localStorage.getItem("AuthHeader")}`)}`
      },
      body: JSON.stringify(fundraiser)
      })
      // head
      .then(response => {
          if (response.ok) {
          // handle successful response
              return response.text();
              
          } 
          else {
          // handle error response
              throw new Error('Something went wrong when creating your bank account'); 
          }
      })
      // body (function)
      .then(data => {
          // setUserData({ ...userData, fundraiserId: data });
          // console.log(data)
          // console.log(userData.fundraiserId)
          sessionStorage.setItem('fundraiserId', data);
          console.log("FUNDRAISER REQUEST"+sessionStorage.getItem('fundraiserId'))
          if(userData.FundraiserImage === undefined) {
            console.log("no image")
          }
          else {
            const formData = new FormData();
          formData.append('FundraiserImage', userData.FundraiserImage);
          for (const entry of formData.entries()) {
            console.log(entry[0]+ ': ' + entry[1].name); 
          }
          // Add image for fundraiser
          userData.FundraiserImage && fetch(`https://localhost:7000/api/user/${localStorage.getItem("userId")}/fundraiser/${sessionStorage.getItem('fundraiserId')}/image`, {
            method: 'POST',
            headers: {
              // 'Content-Type': 'multipart/form-data',
              // 'Content-Type': userData.FundraiserImage.type,
              // 'Content-Length': userData.FundraiserImage.size,
              "Authorization": `Basic ${base64.encode(`${localStorage.getItem("AuthHeader")}`)}`
            },
            body: formData
            })
            // head
            .then(response => {
                if (response.ok) {
                // handle successful response
                    console.log('File uploaded successfully');
                } 
                else {
                // handle error response
                    console.error('An error occurred while uploading the file');
                }
            })
            // body (function)
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }

  const createBankAccount = () => {
    // create the bank account
    fetch(`https://localhost:7000/api/user/${localStorage.getItem("userId")}/bankaccount`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Basic ${base64.encode(`${localStorage.getItem("AuthHeader")}`)}`
      },
      body: JSON.stringify(bankAccount)
      })
      // head
      .then(response => {
          if (response.ok) {
          // handle successful response
              return response.text();
          } 
          else {
          // handle error response
              throw new Error('Something went wrong when creating your bank account'); 
          }
      })
      // body (function)
      .then(data => {
          // setUserData({ ...userData, bankAccountId: data });
          // console.log(data)
          // console.log(userData.bankAccountId)
          sessionStorage.setItem('bankAccountId', data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }

  return (
    <div className="container mt-4 mb-8 flex justify-around">
      {/* The back button */}
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>
      
      {currentStep === steps.length - 1 ? (
        <button
          onClick={() => {
          handleClick("next")
          createFundraiser();
          createBankAccount();
        }}
          className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
        >
          Confirm
        </button>
      ) : (
        <button
          onClick={() => {
            handleClick("next")
          }}
          className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
        >
          Next
        </button>
      )}
    </div>
  )
}

export default StepperControl