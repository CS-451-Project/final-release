import React, {useState, useEffect} from 'react';
import {  useParams } from "react-router-dom";
import UserFundraiserCarousel from '../components/UserDashboardPageComponents/UserFundraiserCarousel';
import UserInfo from '../components/UserDashboardPageComponents/UserInfo';

const UserDashboardPage = () => {
    const [user, setUser] = useState([]);
    const [userFundraisers, setUserFundraisers] = useState([]);
    const {userId} = useParams();
    const userUrl = `https://localhost:7000/api/user/${userId}`;
    const userFundraisersUrl = `https://localhost:7000/api/user/${userId}/fundraiser`

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
        .then(data => {
        setUser(data);
        }
    );

    }, [])

    // Get the fundraisers
    useEffect(() => {
        fetch(userFundraisersUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            })
            //head
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUserFundraisers(data);
            }
        );
    
    }, [])

    return (
        <div className=' pt-12'>
            <div className='px-16 grid place-items-center'>
                <div className='text-5xl font-bold'>Welcome back, {user.firstName}</div>
                <UserInfo props={user}/>
            </div>
            <div className='text-3xl pt-10 px-14 font-semibold'>Your Fundraisers</div>
            <div className='' data-testid="carousel-test-id">
                <UserFundraiserCarousel data={userFundraisers}/>
            </div>
        </div>
        
    )
}

export default UserDashboardPage
