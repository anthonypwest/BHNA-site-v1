import React from "react"
import SEO from "../seo"
import parse from 'html-react-parser'

import { useArchQuery } from "../../hooks/useArchQuery"

import ArchCover from "./ArchCover"

import { getImage } from "gatsby-plugin-image"
import { Wrapper, StyledImg, InnerWrapper, Section, SectionCopy, SectionImg, BTN } from "./ArchPage.styles"

import "@wordpress/block-library/build-style/style.css"

const ArchPage = () => {
   const {
    wpPage: { ACF_ArchStyles: data }
   } = useArchQuery();
   console.log(data, "arch")
   
   const imgData1 = getImage(data.archImage1.localFile);

    return (
        <>
        <SEO title="BH Architectural Styles" />
        <ArchCover />
       
        <Wrapper>
             <InnerWrapper>
             <Section>
            <SectionCopy>
            {parse(`${data.mainSection}`)}

            <BTN>
            <a 
            className="support-btn" 
            href={data.archLink}  
            target="_blank" rel="noopener noreferrer">
                Style Gallery 
            </a>
            </BTN>
            
            </SectionCopy>

            <SectionImg>
            <StyledImg image={imgData1} alt="Victorian House" /> 
            </SectionImg>
            </Section> 
            </InnerWrapper>
           
        </Wrapper>
        </>
    )
}

export default ArchPage
