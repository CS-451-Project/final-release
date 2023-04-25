import React from "react";
import ApprovedDonationWindow from "../components/ApprovedDonationPageComponents/ApprovedDonationWindow";
import { withRouter } from 'storybook-addon-react-router-v6';
import '../App.css';

export default {
    title: 'Ex/Approved Donation Window',
    component: ApprovedDonationWindow,
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: '/',
        }
    }
};

const Template = () => <ApprovedDonationWindow/>;

export const DefaultApprovedDonationWindow = Template.bind({});