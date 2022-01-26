import React from 'react';
import "../styles/index.css";
import { Carrousel } from './Carrousel';


export default {
    title: "Component/Carrousel",
    component: Carrousel,
};

const data = [
    {
        title: "Technicentre industriel Nevers Languedoc, une expertise à 360* de votre matériel roulant",
        iframe: "https://www.youtube.com/embed/oRvaYFlWaT0?enablejsapi=1",
        link: [
            {
                content: "Retrouvez la version retranscrite (DOCX, Français, 40 Ko)",
                type: "external",
                url: 'sncf.com'
            },
            {
                content: "Les principaux chantiers en 2022",
                type: "dowload",
                url: 'sncf.com'
            }
        ]
    },
    {
        title: "lol",
        iframe: "https://www.youtube.com/embed/yfp47kfy2aM?enablejsapi=1",
        link: [
            {
                content: "blablabla",
                type: "external",
                url: 'sncf.com'
            },
        ]
    },
    {
        title: "lol",
        iframe: "https://www.youtube.com/embed/iZ7RFAFiBeI?enablejsapi=1",
        link: [
            {
                content: "blablabla",
                type: "dowload",
                url: 'sncf.com'
            }
        ]
    }
]
const Template = (args) => <Carrousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    slide: data,
    type: 'default'
}