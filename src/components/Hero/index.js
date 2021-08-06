import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItem, HeroH1, HeroP, HeroBtn} from './HeroElements'

function Hero() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItem>
                    <HeroH1>Food of the centuries</HeroH1>
                    <HeroP>Ready in 30 mins</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
