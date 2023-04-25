import React from "react";
import FundraiserDisplaySection from "../components/HomePageComponents/FundraiserDisplaySection";
import '../App.css';

export default {
    title: "HomePage/Fundraiser Display Section",
    component: FundraiserDisplaySection,
};

const Template = (args) => <FundraiserDisplaySection {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Fundraiser 1",
    description: "This is a fundraiser for a good cause",
    goalTargetAmount: 1000,
    createdDate: "2021-01-01",
    goalReachedDate: "2021-01-01",
    plannedEndDate: "2021-01-01",
    tags: ["tag1", "tag2"],
};