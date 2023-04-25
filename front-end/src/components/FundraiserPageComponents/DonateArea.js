import React from 'react';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';

// Number formatter function for currency
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// Returns the amount of progress to display in the progress bar
const progressBarCompletionAmount = (currentBalance, goalAmount) => {
    // Check if amount is over the limit
    if (currentBalance >= goalAmount) {
        return 100;
    }
    // Check if amount is greater than 10%
    else if (Math.trunc((currentBalance / goalAmount) * 100) > 10) {
        return Math.trunc((currentBalance / goalAmount) * 100);
    }
    // Else don't display anything
    else {
        return 0;
    }
}

// The donation area component
const DonateArea = (props) => {
    
    const navigate = useNavigate();
    
    const handleDonate = () => {
        navigate('donation');
    }
        return (
        <div className='flex-row bg-gray-100 lg:p-6 py-2 w-full lg:rounded-lg rounded-t-lg border-solid max-lg:border-t border-yellow-500'>
            <div className='flex m-auto lg:w-full w-1/2 lg:pb-4 max-lg:pt-2'>
                <ProgressBar 
                    className='flex w-full' bgcolor="#6a1b9a"
                    completed={progressBarCompletionAmount(props.currentBalance, props.goalAmount)}
                />
            </div>
            <div className='flex-row inline-flex lg:inline justify-center w-full lg:py-4 max-lg:py-2'>
                <div className='lg:inline text-lg font-bold  justify-center'>
                    { props.currentBalance == undefined ? currencyFormatter.format(0.0) : currencyFormatter.format(props.currentBalance) }
                </div>
                <div className='lg:pl-1 pl-2 pt-1 text-sm italic lg:inline justify-center'> 
                    raised out of {props.goalAmount == undefined ? currencyFormatter.format(0.0) :  currencyFormatter.format(props.goalAmount) }
                </div>
            </div>
            <div className='flex flex-col items-center lg:pt-4 max-lg:pb-2'>
                <button 
                    className="flex text-xl text-black p-3 font-bold 
                    rounded-lg bg-yellow-400 hover:bg-yellow-500 duration-200"
                    onClick={handleDonate}
                >
                    Make a Donation
                </button>
            </div>
        </div>
    )
}

export default DonateArea