import React from "react"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"

import { Content, Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles" 

const Hero = () => {

    const {
        wpPage: { ACF_HomePage: data},
     } = useHeroQuery();
    
    //  console.log(data)

     const imageData = getImage(data.heroImage.localFile);
    //  console.log(imageData)
     const heroLink =   data.heroLink;

    return (
        <Wrapper>
            <StyledImg image={imageData} alt="Hero Image" />
            <HeaderWrapper>
                <Content>
                <div className="hero-line1">
                
                <span className="hero__details date"></span>
                <h1 className="hero__title">35th Annual Bungalow Heaven Home Tour</h1>
                
                </div>

                <div className="hero-line2">
                <span className="hero__details">April 26, 2026</span>
                <h3></h3>
                </div>

                <Link to="/events/bungalow-heaven-home-tour" className="tour-cta_btn">
                    Learn More
                </Link>
                <p>&nbsp;
                </p>
                <p>&nbsp;
                </p>
                    
                </Content>
            </HeaderWrapper> 
        </Wrapper>
    )
}

export default Hero
