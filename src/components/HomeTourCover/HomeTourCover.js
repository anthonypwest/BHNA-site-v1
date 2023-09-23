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
            <h2>33rd Bungalow Heaven Home Tour</h2>  
            <Seperator />
            <div>
                <p className="tour__headline">Save the Date</p>
                <p className="tour__sub-headline">Historic Homes & Artisan Demonstrations</p>
            </div>
            <Seperator />
            <div>
                <p className="tour__online">Join us in person</p>
                <p className="tour__info"> <b>April 28, 2024</b> | Tickets not yet Available on Eventbrite</p>
                <a href="https://www.eventbrite.com/e/33rd-bungalow-heaven-home-tour-tickets-541822805597" rel="noopener noreferrer" target="_blank">
                    <button>
                        Buy Tickets
                    </button>
                </a>
            </div>


            </TourDetails>

            
           <StyledImg image={imgData} alt="HomeTour" />
           
        </Wrapper>
    )
}

export default HomeTourCover
