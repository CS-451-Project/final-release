import React, {useState} from 'react';
import { format } from 'date-fns'
import donationHeartImage from '../../imgs/donation-heart.png'

// Number formatter function for currency
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// The donations for a fundraiser component
const Donations = (props) => {
    const [visibleDonations, setVisibleDonations] = useState(3);

    // Updates the amount of shown donations when show more button is clicked
    const showMoreDonations = () => {
        setVisibleDonations((prevValue) => prevValue + 5);
    }

    // Updates the amount of shown donations when show less button is clicked
    const showLessDonations = () => {
        setVisibleDonations((prevValue) => prevValue - 5);
    }

    // Returns the css for the show more button
    const showMoreButtonCss = () => {
        // Button should be hidden if all donations are already displayed
        if (visibleDonations >= props.donations.length) {
            return 'hidden'
        }
        // Display the button
        else {
            return 'flex flex-col text-lg text-slate-600 hover:text-blue-300 duration-200 inline'
        }
    }

    // Returns the css for the show less button
    const showLessButtonCss = () => {
        // Button should be hidden if there are no donations to collapse
        if (visibleDonations <= 3) {
            return 'hidden'
        }
        else if (visibleDonations < props.donations.length & visibleDonations > 3) {
            return 'flex flex-col text-lg text-slate-600 hover:text-blue-300 duration-200 inline'
        }
        else if (visibleDonations >= props.donations.length) {
            return 'flex flex-col text-lg text-slate-600 hover:text-blue-300 duration-200'
        }
    }

    // Returns the css for the button forward slash divider
    const buttonDividerCss = () => {
        // if (visibleDonations < 4) {
        //     return 'hidden'
        // }
        if (visibleDonations > 4 & visibleDonations < props.donations.length) {
            return 'flex inline text-lg text-slate-600 px-2';
        }
        else {
            return 'opacity-0';
        }
    }

    return (
        <div>
            <div className='text-2xl pb-4'>Donations: </div>
            {props.donations.slice(0, visibleDonations).map((donation) => (
                <div key={donation.donationId} className="pt-4">
                    <div className='bg-gray-200 rounded p-2'>
                    <table>
                    <tbody>
                    <tr>
                        <td className='flex content-baseline pt-2 w-8'>
                            <img src={donationHeartImage} className="object-contain" alt="donation-heart" />
                        </td>
                        <td className='pl-4'>
                            <div className='font-bold'>
                                {donation.name == null ? "Anonymous" : donation.name}
                            </div>
                            <div className='inline'>
                                {currencyFormatter.format(donation.amount)}
                            </div>
                            <div className='inline px-2'>-</div>
                            <div className='inline italic'>
                                {(donation.date != null) ? format(new Date(donation.date), 'MMMM dd, yyyy') : "" } 
                            </div>
                            <div>
                                {donation.message}
                            </div>
                        </td>
                    </tr>
                    </tbody> 
                    </table>
                    </div>
                </div>
            ))}
            <div className='flex inline justify-center pt-6'>
                <div className='flex justify-center'>
                    <button id="show-more-button" 
                        className={showMoreButtonCss()} 
                        onClick={showMoreDonations}>
                        Show more
                    </button>
                </div>
                <div className={buttonDividerCss()}>/</div>
                <div className='flex justify-center'>
                    <button id="show-less-button" 
                        className={showLessButtonCss()} 
                        onClick={showLessDonations}>
                        Show less
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Donations