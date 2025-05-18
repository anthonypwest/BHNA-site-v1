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
   const imgData2 = getImage(data.archImage2.localFile);
   const imgData3 = getImage(data.archImage3.localFile);
   const imgData4 = getImage(data.archImage4.localFile);
   const imgData5 = getImage(data.archImage5.localFile);
   const imgData6 = getImage(data.archImage6.localFile);

    return (
        <>
        <SEO title="BH Architectural Styles" />
        <ArchCover />
       
        <Wrapper>
             <InnerWrapper>
             <Section>
            <SectionCopy>
            {parse(`${data.mainSection1}`)}
            
            </SectionCopy>

            <SectionImg>
            <StyledImg image={imgData1} alt="Composite" /> 
            </SectionImg>
            </Section> 
            </InnerWrapper>
           
        </Wrapper>

        <Wrapper>
             <InnerWrapper>
             <Section>

            <SectionImg>
            <StyledImg image={imgData2} alt="Victorian House" /> 
            </SectionImg>
             
            <SectionCopy>
            {parse(`${data.mainSection2}`)}

            <BTN>
            <a 
            className="support-btn" 
            href={data.archLink1}  
            target="_blank" rel="noopener noreferrer">
                Victorian Style Gallery 
            </a>
            </BTN>
            
            </SectionCopy>


            </Section> 
            </InnerWrapper>
           
        </Wrapper>

        <Wrapper>
             <InnerWrapper>
             <Section>
            <SectionCopy>
            {parse(`${data.mainSection3}`)}

            <BTN>
            <a 
            className="support-btn" 
            href={data.archLink2}  
            target="_blank" rel="noopener noreferrer">
                Early Craftsman Style Gallery 
            </a>
            </BTN>
            <BTN>
            <a 
            className="support-btn" 
            href={data.archLink3}  
            target="_blank" rel="noopener noreferrer">
                Classic Craftsman Style Gallery 
            </a>
            </BTN>
            
            </SectionCopy>

            <SectionImg>
            <StyledImg image={imgData3} alt="Craftsman House" /> 
            </SectionImg>
            </Section> 
            </InnerWrapper>
           
        </Wrapper>

        
        </>
    )
}

export default ArchPage
