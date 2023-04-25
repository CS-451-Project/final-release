import React from "react";
import FundraiserCarousel from "../components/HomePageComponents/FundraiserCarousel";
import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const data = [
    {
        "fundraiserId": "1",
        "title": "Fundraiser 1",
        "goalTargetAmount": 1000,
        "description": "This is a fundraiser for a good cause",
        "createdDate": "2021-01-01",
        "goalReachedDate": "2021-01-01",
        "plannedEndDate": "2021-01-01",
        "tags": [
            "tag1",
            "tag2"
        ]
    },
    {
        "fundraiserId": "2",
        "title": "Fundraiser 2",
        "goalTargetAmount": 1000,
        "description": "This is a fundraiser for a good cause",
        "createdDate": "2021-01-01",
        "goalReachedDate": "2021-01-01",
        "plannedEndDate": "2021-01-01",
        "tags": [
            "tag1",
            "tag2"
        ]
    },
    {
        "fundraiserId": "3",
        "title": "Fundraiser 3",
        "goalTargetAmount": 1000,
        "description": "This is a fundraiser for a good cause",
        "createdDate": "2021-01-01",
        "goalReachedDate": "2021-01-01",
        "plannedEndDate": "2021-01-01",
        "tags": [
            "tag1",
            "tag2"
        ]
    },
    {
        "fundraiserId": "4",
        "title": "Fundraiser 4",
        "goalTargetAmount": 1000,
        "description": "This is a fundraiser for a good cause",
        "createdDate": "2021-01-01",
        "goalReachedDate": "2021-01-01",
        "plannedEndDate": "2021-01-01",
        "tags": [
            "tag1",
            "tag2"
        ]
    }
]

export default {
    title: 'HomePage/Fundraiser Carousel',
    component: FundraiserCarousel,
    parameters: {
    reactRouter: {
        routePath: '/',
        }
    }
};

const Template = () => (
    // Router was needed here because the component uses the Link component from react-router-dom
    // So the component needed to have a router simulated in the storybook
    <Router>
        <FundraiserCarousel data = {data}/>
    </Router>
);

export const Default = Template.bind({});
