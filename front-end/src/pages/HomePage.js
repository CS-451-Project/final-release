import React, { useState, useEffect } from 'react'
import FundraiserCarousel from '../components/HomePageComponents/FundraiserCarousel';
import StepsPic from '../imgs/StepsPic.jpg';
import HomePageFeatFundraiser from '../components/HomePageComponents/FeatFundraiser';
import PicHeader from '../components/HomePageComponents/PicHeader';

const HomePage = () => {
    const [obj, setObj] = useState({
        "Acending": true,
    });

    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
    fetch(`https://localhost:7000/api/fundraiser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
        })
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setData(data);
        setTags(data.tags);
        }
    );

    }, [])

    return (
        <div>
            {/* PIC HEADER */}
            <PicHeader />
            <div className='p-8  text-5xl font-Poppins font-semibold'>
                Start a fundraiser
            </div>
            {/* STEPS TO FUNDRAISER */}
            <div className='flex flex-wrap justify-center font-Poppins'>
                <img src={StepsPic} alt="Logo" className='w-1/2 h-1/2' />
                <div className='flex flex-col justify-center mx-16'>
                    
                    <div className='py-4'>
                        <div className='text-3xl font-bold'>The Basics</div>
                        
                        <div className='text-xl pl-4'>Enter your information</div>
                    </div>
                    <div className='py-4'>
                        <div className='text-3xl font-bold'>What is your cause?</div>
                        
                        <div className='text-xl pl-4'>Enter your fundraiser information</div>
                    </div>
                    <div className='py-4'>
                        <div className='text-3xl font-bold'>Support</div>
                        
                        <div className='text-xl pl-4'>Enter your payment information</div>
                    </div>
                </div>

            </div>
            {/* FEATURED FUNDRAISER */}
            <div className='pt-16 px-16' data-testid="feat-fundraiser-test-id">
                {/* THe list of objects from the post request is being set as the props */}
                <HomePageFeatFundraiser data={data}/>
            </div>
            {/* CARROUSSEL FUNDRAISER SLIDES */}
            <div className='pt-16' data-testid="carousel-test-id">
                <div className='pl-16 text-5xl font-Poppins font-semibold'>
                    General Fundraisers
                </div>
                <FundraiserCarousel data={data}/>
            </div>
        </div>
    )
}

export default HomePage;