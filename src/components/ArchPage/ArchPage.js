import React from "react"
import SEO from "../seo"

import { useArchQuery } from "../../hooks/useArchQuery"

import Product from "../Product/Product"

import {  Wrapper } from "./ArchPage.styles"

const ArchPage = () => {
    const { product } = useArchQuery();
    console.log(product, "shop")
    

    return (
        <Wrapper>
        <SEO title="BH Arch Stylees" />
        {new Array(9).fill("").map((element, i) => (
            <Product 
            key={i}
            image={
                product.ACF_Shop[`productImage${i + 1}`].localFile.childImageSharp.gatsbyImageData
            }
            productName={product.ACF_Shop[`productName${i + 1}`]}
            productPrice={product.ACF_Shop[`productPrice${i + 1}`]}
            />
        ))}
        
        
        </Wrapper>
    )
}

export default ArchPage
