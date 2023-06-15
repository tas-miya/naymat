import React from 'react';
import {
    FeautureContainer,
    FeatureButton
} from './FeatureElements';

const Feature = () => {
    return (
        <FeautureContainer>
            <h1>Pizza of the day</h1>
            <p>Truffle alfredao sauce topped with 24 carat gold dust.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeautureContainer>
    )
}

export default Feature
