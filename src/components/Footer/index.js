import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Natural Selection</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink 
                                href="https://www.linkedin.com/in/quenton-redding-b9b763152/" 
                                target="_blank" 
                                aria-label="LinkedIn" 
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="https://github.com/Q-Redding" 
                                target="_blank" 
                                aria-label="Github" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
