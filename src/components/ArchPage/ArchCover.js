import React from "react"
import { useArchQuery } from "../../hooks/useArchQuery"

import { getImage } from "gatsby-plugin-image"
import { StyledImg, ParagraphIntro, Wrapper } from "./ArchCover.styles"

const ArchPage = () => {
   const {
    wpPage: { ACF_ArchStyles: data}
   } = useArchQuery();
   
   const imgData = getImage(data.archImage2.localFile); 

   return (
           <Wrapper>
            
            <ParagraphIntro>{data.archStylesText1}</ParagraphIntro>
            <StyledImg image={imgData} alt="BH Arch Example" />
            </Wrapper>
            
    )
}
export default ArchPage
