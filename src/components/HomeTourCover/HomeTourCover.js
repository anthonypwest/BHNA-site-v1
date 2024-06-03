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
            <h2>35th Annual Bungalow Heaven Home Tour</h2>  
            <Seperator />
            <div>
                <p className="tour__headline">Save the Date</p>
                <p className="tour__sub-headline">Historic Homes & Artisan Demonstrations</p>
            </div>
            <Seperator />
            <div>
                <p className="tour__online">Join us</p>
                <p className="tour__info"> <b>April 27, 2025</b> | Tickets will be available in 2025</p>
            </div>


            </TourDetails>

            
           <StyledImg image={imgData} alt="HomeTour" />
           
        </Wrapper>
    )
}

export default HomeTourCover
