import React from "react"
import SEO from "../seo"
import parse from 'html-react-parser'

import { useArchQuery } from "../../hooks/useArchQuery"

import { getImage } from "gatsby-plugin-image"
import { Wrapper, StyledImg, InnerWrapper, Section, SectionCopy, SectionImg } from "./ArchPage.styles"
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

        <Wrapper>
             <InnerWrapper>
             <Section>
            <SectionCopy>
            {parse(`${data.mainSection}`)}
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
