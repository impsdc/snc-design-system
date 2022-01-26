import React from 'react';
import "../styles/index.css";
import { Link } from './Link';


export default {
    title: "Component/Link",
    component: Link,
};

const Template = (args) => <Link {...args} />;

export const Internal = Template.bind({});
Internal.args = {
    label: 'Internal',
    type: "internal",
    blank: true,
    fontSize: '1.2rem'
}

export const External = Template.bind({});
External.args = {
    label: 'External',
    type: 'external',
    blank: true,
}


export const ExternalInoui = Template.bind({});
ExternalInoui.args = {
    label: 'External InOui',
    type: 'external',
    blank: true,
    inoui: true
}

export const Download = Template.bind({});
Download.args = {
    label: 'Download',
    type: 'download',
    blank: true,
    inoui: false
}

export const Phone = Template.bind({});
Phone.args = {
    label: 'Phone InOui',
    type: 'phone',
    blank: true,
    href: '0606060606',
    inoui: true
}

export const Videos = Template.bind({});
Videos.args = {
    label: 'Video',
    type: 'external',
    forVideo: true,
    blank: true,
    inoui: true,
    fontSize: '1.8rem'
}