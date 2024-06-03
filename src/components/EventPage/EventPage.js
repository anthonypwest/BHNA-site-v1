import React from 'react'
import HomeTourCover from "../HomeTourCover/HomeTourCover"
import SEO from "../seo"
import parse from 'html-react-parser'
import { getImage } from "gatsby-plugin-image"
import { useEventInfoQuery } from "../../hooks/useEventInfoQuery"

import { Section,  SectionCopy, SectionImg, Wrapper, H3, SponsorWrapper, SponsorContent, StyledImg, StyledImg2, StyledImg3 } from "./EventPage.styles"

import "@wordpress/block-library/build-style/style.css"

const EventPage = () => {
     
    const {
        wpPage: { ACF_EventTour: data },
    } = useEventInfoQuery();
    console.log(data, "Event")

    
    const imgData1 = getImage(data.sectionImg1.localFile);
    const imgSponsor1 = getImage(data.sponsorImg1.localFile);
    const imgSponsor2 = getImage(data.sponsorImg2.localFile);
    

    return (
        <div>
            <SEO title="Bungalow Heaven Home Tour" />  
            <HomeTourCover />
           
            <Wrapper>
            <Section>
            <SectionCopy>
            {parse(`${data.section1}`)}
            <br />
            {parse(`${data.section2}`)}
            </SectionCopy>

            </Section>
         
            </Wrapper>
            
        </div>
    )
}

export default EventPage
