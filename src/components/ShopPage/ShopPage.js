import React from "react"

import { useShopQuery } from "../../hooks/useShopQuery"

import Product from "../Product/Product"

import {  Wrapper } from "./ShopPage.styles"

const ShopPage = () => {
    const { product } = useShopQuery();
    console.log(product, "shop")
    

    return (
        <Wrapper>
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

export default ShopPage