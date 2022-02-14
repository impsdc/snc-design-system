import React from 'react';
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
    space: "30px",
    slide: data,
}


export const Inoui = Template.bind({});
Inoui.args = {
    inoui: true,
    space: "70px",
    slide: data,
}