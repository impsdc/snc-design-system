import React from 'react';
import "../styles/index.css";
import { Button } from './Button';


export default {
    title: "Component/Button",
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    background: "bg-blue-500",
    label:"Primary",
    rounded:false
}

export const PrimaryRounded = Template.bind({});

PrimaryRounded.args = {
    ...Primary.args,
    background:"bg-red-500",
    label: 'Primary with a really long name',
}