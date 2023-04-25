import React from 'react';
import NavBar from '../components/NavBar';
import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Ex/Navigation Bar',
  component: NavBar,
  argTypes: { click: { action: alert('Button clicked!') } },
  parameters: {
    reactRouter: {
        routePath: '/',
        }
    }
};

// const Template = () => <NavBar/>;
const Template = () => (
    // Router was needed here because the component uses the Link component from react-router-dom
    // So the component needed to have a router simulated in the storybook
    <Router>
        <NavBar/>
    </Router>
);

export const DefaultNavBar = Template.bind({});
