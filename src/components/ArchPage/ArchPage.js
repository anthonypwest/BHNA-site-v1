import React from "react"
import SEO from "../seo"

import { useArchQuery } from "../../hooks/useArchQuery"

import {  Wrapper } from "./ArchPage.styles"

const ArchPage = () => {
    const { archinfo } = useArchQuery();
    console.log(archinfo, "arch")
    

    return (
        <Wrapper>
        <SEO title="BH Arch Stylees" />
        
        
        </Wrapper>
    )
}

export default ArchPage
