import React from "react";
import DonateForm from "../components/DonationPageComponents/DonateForm";
import { withRouter } from 'storybook-addon-react-router-v6';
import '../App.css';

export default {
    title: 'Ex/Donation Window',
    component: DonateForm,
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: '/',
        }
    }
};

const Template = () => <DonateForm/>;

export const DefaultDonationWindow = Template.bind({});
