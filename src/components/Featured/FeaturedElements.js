import styled from 'styled-components';
import FeaturePic from '../../images/featureddish.jpeg'; 

export const FeaturedContainer = styled.div `
     background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
     height: 100vh; 
     max-height: 500px; 
     background-position: center;
     background-size: cover;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     color: #fff;
     text-align: center;
     padding: 0 1rem;
`;

export const FeaturedH1 = styled.h1 `
    font-size: clamp(3rem, 5vw, 5rem);
`;

export const FeaturedP = styled.p `
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
`;

export const FeaturedButton = styled.button `
    font-size: 1.4rem;
    padding: 0.5rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;

    &:hover{
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;