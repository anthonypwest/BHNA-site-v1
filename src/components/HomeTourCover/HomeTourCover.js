import React from 'react'
import { getImage } from "gatsby-plugin-image"
import { useHomeTourQuery } from "../../hooks/useHomeTourQuery"
import { Wrapper, StyledImg, TourDetails, Seperator } from "./HomeTourCover.styles"


const HomeTourCover = () => {
    
    const {
        wpPage: { ACF_EventTour: data },
    } = useHomeTourQuery();
    console.log(data)

    const imgData = getImage(data.tourImage.localFile);
    

    return (
        <Wrapper>
            
          
           <TourDetails className="about-text">
            <h2>A Note About The 2025 Bungalow Heaven Home Tour</h2>  
            <Seperator />
            <div>
                <p className="tour__online">Join us</p>
                <p className="tour__info"> <b>April 26, 2026</b> | Tickets will be available in 2026</p>
            </div>


            </TourDetails>

            
           <StyledImg image={imgData} alt="HomeTour" />
           
        </Wrapper>
    )
}

export default HomeTourCover
