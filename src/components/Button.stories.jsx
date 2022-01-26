import React from 'react';
import "../styles/index.css";
import { Button } from './Button';


export default {
    title: "Component/Button",
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Default',
    type: 'default'
}

export const DefaultInoui = Template.bind({});
DefaultInoui.args = {
    label: 'Default Inoui',
    type: 'inoui',
}

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    label: 'Default Dark',
    type: 'dark',
}

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
    label: 'Icon button',
    icon: 'phone',
}

export const Edito = Template.bind({});
Edito.args = {
    icon: 'phone',
    type: "edito",
    label: 'Edito button',
}