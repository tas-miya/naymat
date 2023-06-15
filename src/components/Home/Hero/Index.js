import React from 'react';
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn 
} from './HeroElements';

const Hero = () => {

    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Hello We are Naymat Foods</HeroH1>
                    <HeroP>Try us to stay forever</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
