import React, {useState, useEffect} from 'react';
import {  useParams } from "react-router-dom";
import DonateArea from '../components/FundraiserPageComponents/DonateArea';
import Fundraiser from '../components/FundraiserPageComponents/Fundraiser';
import Donations from '../components/FundraiserPageComponents/Donations';
import { format } from 'date-fns'

const FundraiserPage = () => {
    const [fundraiser, setFundraiser] = useState([]);
    const [user, setUser] = useState([]);
    const [tags, setTags] = useState([]);
    const [donations, setDonations] = useState([]);
    const {userId, fundraiserId} = useParams();

    // Set the fundraiser and user api uri's
    const userUrl = `https://localhost:7000/api/user/${userId}`;
    const fundraiserUrl = `https://localhost:7000/api/fundraiser/${fundraiserId}`;
    const donationsUrl = `https://localhost:7000/api/fundraiser/${fundraiserId}/donation`;

    // Get the fundraiser
    useEffect(() => {
        fetch(fundraiserUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
        setFundraiser(data);
        setTags(data.tags);
        })

    }, []);

    // Get the user
    useEffect(() => {
        fetch(userUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setUser(data);
        }
    );

    }, [])

    // Get the donations
    useEffect(() => {
        fetch(donationsUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
        setDonations(data);
        })

    }, []);

    return (
        // The fundraiser
        <div id="mainContainer" className='flex flex-column justify-center pt-4 lg:pb-12 pb-12 bg-bottom'>
            <div id="fundraiserContainer" className='flex-row justify-center pt-4 3xl:pl-56 3xl:pr-128 lg:pl-24 lg:pr-96 px-8 w-full'>
                <div className='bg-gray-100 p-12 rounded'>
                    <Fundraiser
                        title={fundraiser.title}
                        description={fundraiser.description}
                        createdDate={(fundraiser.createdDate != null) ? format(new Date(fundraiser.createdDate), 'MMMM dd, yyyy') : "" } 
                        plannedEndDate={(fundraiser.plannedEndDate != null) ? format(new Date(fundraiser.plannedEndDate), 'MMMM dd, yyyy') : "" }
                        tags = {tags}
                        organizerName={user.firstName + " " + user.lastName}
                        organizerEmail={user.email}
                        fundraiserPictureUrl={fundraiser.pictureId}
                    />
                    <Donations donations = {donations}/>
                </div>
            </div>
            {/* The donation area */}
            <div id="donationContainer" className='flex flex-col fixed 3xl:right-28 lg:right-16 lg:top-48 max-lg:w-full max-lg:bottom-0 justify-center z-10'>
                <DonateArea
                    currentBalance = {fundraiser.currentBalanceAmount}
                    goalAmount = {fundraiser.goalTargetAmount}
                />
            </div>
        </div>
    )
}

export default FundraiserPage;
