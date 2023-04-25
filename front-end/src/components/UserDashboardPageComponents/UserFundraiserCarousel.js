import React, { useState, useEffect } from 'react'
import UserFundraiserDisplaySection from './UserFundraiserDisplaySection';
import { format } from 'date-fns'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const UserFundraiserCarousel = (props) => {
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
        <Carousel responsive={responsive}>
            {props.data.map((fundraiser)=>{   
                return(
                    <div className='flex justify-center py-8' key={fundraiser.fundraiserId}>
                        {/* The link makes the display clickable and navigates to individual fundraiser*/}
                        {/* The FundraiserDisplaySection component is used to display the fundraiser */}
                        {/* The props passed in is the object properties */}
                        <div>
                            <UserFundraiserDisplaySection
                            fundraiserId = {fundraiser.fundraiserId }
                            fundraiserImg = {fundraiser.pictureId}
                            organizerId={fundraiser.organizerId}
                            title = {fundraiser.title}
                            goalTargetAmount = {fundraiser.goalTargetAmount}
                            description = {fundraiser.description}
                            createdDate = {format(new Date(fundraiser.createdDate), 'MM/dd/yyyy')}
                            goalReachedDate = {format(new Date(fundraiser.goalReachedDate), 'MM/dd/yyyy')}
                            plannedEndDate = {format(new Date(fundraiser.plannedEndDate), 'MM/dd/yyyy')}
                            tags = {fundraiser.tags}
                        />
                        </div>
                    </div>
                );
            })} 
        </Carousel>
  )
}

export default UserFundraiserCarousel