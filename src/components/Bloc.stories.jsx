import React from 'react';
import "../styles/index.css";
import { Bloc } from './Bloc';
import bloc2 from "../images/bloc2.jpg";

export default {
    title: "Component/Bloc",
    component: Bloc,
};

const Template = (args) => <Bloc {...args} />;

export const Default = Template.bind({});
Default.args = {
    img: bloc2,
    space: "medium",
}