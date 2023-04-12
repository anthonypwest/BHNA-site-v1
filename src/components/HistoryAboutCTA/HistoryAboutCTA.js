import React from 'react'
import { Link } from "gatsby"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import { useCTAQuery } from "../../hooks/useCTAQuery"
import {  AboutText, Wrapper, ImgWrapper } from "./HistoryAboutCTA.styles"

const HistoryAboutCTA = () => {
    const { cta } = useCTAQuery();
    const data = useAboutQuery();
    const imageData = data.wpPage.featuredImage.node.localFile.publicURL

    return (
        <Wrapper>
           
           <AboutText className="about-text">
              <div className="history-text" dangerouslySetInnerHTML={{ __html: data.wpPage.content}} />
               <Link to={cta.ACF_HomePage.what_is_link} className="about-btn">Learn More</Link>
            </AboutText>
          
           <ImgWrapper image={imageData} />
           
        </Wrapper>
    )
}

export default HistoryAboutCTA
