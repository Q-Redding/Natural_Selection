import React from 'react';
import {
    FeaturedContainer,
    FeaturedH1,
    FeaturedP,
    FeaturedButton
} from './FeaturedElements';

function Featured() {
    return (
        <FeaturedContainer>
            <FeaturedH1>Dish of the Week</FeaturedH1>
            <FeaturedP>Vegan Black LT Sandwich</FeaturedP>
            <FeaturedButton>Order Now!</FeaturedButton>
        </FeaturedContainer>
    )
}

export default Featured
