import React from 'react';
import Button from '../components/Button.js';
import '../App.css';


export default {
  title: 'Ex/Button',
  component: Button,
  // argTypes: { click: { action: alert('Button clicked!') } },
};

const Template = (args) => <Button {...args} />;

// export const Default = Template.bind({});

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  onClick: () => alert('SMALL BUTTON'),
  title: 'SMALL',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  onClick: () => alert('BIG BUTTON'),
  title: 'BIG',
  className: 'text-xl bg-blue-500 text-white py-2 px-4 hover:bg-blue-700',
};



