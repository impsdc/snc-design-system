import React from 'react';
import "../styles/index.css";
import { Carrousel } from './Carrousel';
import { data } from "../helpers/data"

export default {
    title: "Component/Carrousel",
    component: Carrousel,
};

const Template = (args) => <Carrousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    inoui: false,
    space: "medium",
    slide: data,
}


export const Inoui = Template.bind({});
Inoui.args = {
    inoui: true,
    space: "light",
    slide: data,
}