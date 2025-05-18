import React from "react"
import { useArchQuery } from "../../hooks/useArchQuery"
import parse from 'html-react-parser'

import { getImage } from "gatsby-plugin-image"
import { StyledImg, ParagraphIntro, Wrapper } from "./ArchCover.styles"

const ArchPage = () => {
   const {
    wpPage: { ACF_ArchStyles: data}
   } = useArchQuery();
   
   const imgData1 = getImage(data.archImage1.localFile); 

   return (
           <Wrapper>
            
            <ParagraphIntro>{parse(`${data.mainSection1}`)}</ParagraphIntro>
            <StyledImg image={imgData1} alt="Composite" />
            </Wrapper>


    )
}
export default ArchPage
