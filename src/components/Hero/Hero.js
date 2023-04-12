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
                
                <span className="hero__details date">Bungalow Heaven Neighborhood Association presents</span>
                <h1 className="hero__title">Encore 2021 Virtual Home Tour</h1>
                
                </div>

                <div className="hero-line2">
                {/* <span className="hero__details">See ya next year!</span> */}
                {/* <h6>If you</h6> */}
                </div>

                <Link to={heroLink} className="tour-cta_btn">
                    Learn More
                </Link>
            <div>
                <p className="tour__info"> <b>April 30, 2023</b> | Tickets now Available on Eventbrite</p>
                <a href="https://www.eventbrite.com/e/33rd-bungalow-heaven-home-tour-tickets-541822805597" rel="noopener noreferrer" target="_blank">
                    <button>
                        Buy Tickets
                    </button>
                </a>
            </div>
                </Content>
            </HeaderWrapper> 
        </Wrapper>
    )
}

export default Hero
