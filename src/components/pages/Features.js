import React from 'react';
import FeatureSection from './FeatureSection';
import HometopBanner from './HometopBanner';
import MoreFeatures from './MoreFeatures';

//fetaure js

function Features() {
    const data = {
        h2: 'The best app for your data',
        p: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
    };
    return (
        <>
            <HometopBanner data={data} />
            <FeatureSection />
            <MoreFeatures />
        </>
    )
}

export default Features
