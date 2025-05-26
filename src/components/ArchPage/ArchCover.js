import React from "react"
import { useArchQuery } from "../../hooks/useArchQuery"
import parse from 'html-react-parser'

import { getImage } from "gatsby-plugin-image"
import { StyledImg, ParagraphIntro, Wrapper } from "../LandmarkCover/LandmarkCover.styles"

const ArchPage = () => {
   const {
    wpPage: { ACF_ArchStyles: data}
   } = useArchQuery();
   
   const imgData = getImage(data.archImage1.localFile); 

   return (
           <Wrapper>
            
            <ParagraphIntro>{parse(`${data.mainSection1}`)}</ParagraphIntro>
            <StyledImg image={imgData} alt="Composite" />
            </Wrapper>
            
    )
}
export default ArchPage

