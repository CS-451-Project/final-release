import React, { useState, useEffect } from 'react'

import Stepper from '../components/CreateFundraiserPageComponents/Stepper';
import StepperControl from '../components/CreateFundraiserPageComponents/StepperControl';
import { UseContextProvider, useStepperContext } from '../components/contexts/StepperContext';

import FundraiserDetails from '../components/CreateFundraiserPageComponents/FundraiserDetails';
import BankInformation from '../components/CreateFundraiserPageComponents/BankInfo';
import Review from '../components/CreateFundraiserPageComponents/Review';
import Confirm from '../components/CreateFundraiserPageComponents/Confirm';
import Confetti from 'react-confetti'

const CreateFundraiserPage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Fundraiser Details",
        "Bank Info",
        "Review",
        "Confirm",
    ];

    const displayStep = (step) => {
        switch (step) {
        case 1:
            return <FundraiserDetails />;
        case 2:
            return <BankInformation />;
        case 3:
            return <Review />;
        case 4:
            return <Confirm />;
        default:
        }
    };

    // this function is passed to the StepperControl component
    // it is used to control the buttons for the multi-step form
    const handleClick = (direction) => {
        let newStep = currentStep;

        // if direction is next we increment the step else we decrement the step
        direction === "next" ? newStep++ : newStep--;

        // check if steps are within bounds
        // if so we set the current step to the new step else we do nothing
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div>
            {/* if we are on the last step of the form we have sucessfully created the fundraiser and show confetti */}
            {currentStep === steps.length &&
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight - 20}
                    numberOfPieces={500}
                    recycle={false}
                    tweenDuration={1000}
                    // color={['#ff0000', '#00ff00', '#0000ff']}
                />
            }
            <UseContextProvider>
            <div className='px-4 py-8'>
                <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-3/4">
                    {/* Stepper */}
                    <div className="horizontal container mt-5 ">
                        {/* This component is the progression bar for the multi-step form */}
                        <Stepper steps={steps} currentStep={currentStep} />

                        {/* This is the content (in this case the different forms) of the multi-step form */}
                        {/* This is wrapped in a useContext so all the variables can be shared within the different forms */}
                        <div className="my-10 p-10 ">
                        
                            {displayStep(currentStep)}
                        
                        </div>
                    </div>

                    {/* navigation buttons */}
                    {currentStep !== steps.length &&
                        <StepperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                        />
                    }
                </div>
            </div>
            </UseContextProvider>
        </div>
    )
}

export default CreateFundraiserPage
