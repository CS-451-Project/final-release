import React, { useState, useEffect } from 'react'
import FundraiserDisplaySection from './FundraiserDisplaySection';
import { format } from 'date-fns'
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FundraiserCarousel = (props) => {
    // This is for the display of the carousel
    // responsive is an object that contains the breakpoints for the carousel and the number of items to display
    const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
    };

  return (
    // The map surronded by the carousel component to display the fundraisers
        <Carousel responsive={responsive}>
            {/* THe props passed in is mapped */}
            {props.data.map((fundraiser)=>{   
                return(
                    // 
                    <div className='flex justify-center p-8' key={fundraiser.fundraiserId}>
                        {/* The link makes the display clickable and navigates to individual fundraiser*/}
                        <Link to={`/organizer/${fundraiser.organizerId}/fundraiser/${fundraiser.fundraiserId}`} data-testid='link-to-fundraiser'>
                        {/* The FundraiserDisplaySection component is used to display the fundraiser */}
                        {/* The props passed in is the object properties */}
                            <div data-testid="fundraiser-section-id">
                                <FundraiserDisplaySection
                                id = {fundraiser.fundraiserId }
                                fundraiserImg = {fundraiser.pictureId}
                                title = {fundraiser.title}
                                goalTargetAmount = {fundraiser.goalTargetAmount}
                                description = {fundraiser.description}
                                createdDate = {format(new Date(fundraiser.createdDate), 'MM/dd/yyyy')}
                                goalReachedDate = {format(new Date(fundraiser.goalReachedDate), 'MM/dd/yyyy')}
                                plannedEndDate = {format(new Date(fundraiser.plannedEndDate), 'MM/dd/yyyy')}
                                tags = {fundraiser.tags}
                                />
                            </div>
                        </Link>
                    </div>
                );
            })} 
        </Carousel>
  )
}

export default FundraiserCarousel