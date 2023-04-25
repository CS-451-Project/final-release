import React from "react";
import LoginWindow from "../components/LoginWindow";
import { withRouter } from 'storybook-addon-react-router-v6';
import '../App.css';

export default {
  title: 'Ex/Login Window',
  component: LoginWindow,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    }
  }
};

const Template = () => <LoginWindow/>;

export const DefaultLoginWindow = Template.bind({});