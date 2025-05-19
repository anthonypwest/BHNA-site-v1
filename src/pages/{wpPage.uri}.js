import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import PageHero from "../components/PageHero/PageHero"

import EarlyHistory from "../components/EarlyHistory/EarlyHistory"
import WhatBungalow from "../components/WhatBungalow/WhatBungalow"
import BungalowOrigins from "../components/BungalowOrigins/BungalowOrigins"
import LandmarkPage from "../components/LandmarkPage/LandmarkPage"
import EventPage from "../components/EventPage/EventPage"
import ShopPage from "../components/ShopPage/ShopPage"
import ArchPage from "../components/ArchPage/ArchPage"
import BuildingReqPage from "../components/BuildingReqPage/BuildingReqPage"

import { Content, Wrapper, ContentWrapper, PageContent } from "../styles/Page.styles"
import BoDPage from "../components/BoDPage/BoDPage"






const PageTemplate = ({ data }) => {
 
 
 
  const uriEvents = `/events/bungalow-heaven-home-tour/`
  const uriLandmark = `/landmark-information/landmark-faq/`
  const uriBuildingReq = `/landmark-information/building-requirements/`
  const uriOrigins = `/our-history/origins/`
  const uriEarlyHistory = `/our-history/early-history/`
  const uriBoD = `/about-us/board-of-directors/`
  const uriWhat = `/our-history/what-is-bhna/`
  const uriShop = `/shop/`
  const uriArch = `/bh-architectural-styles/`
  
  console.log(uriEvents)
  

return (   
  
      <Layout>
        {data.wpPage.featuredImage ? (
            <PageHero
            img={
                data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData
            } title={data.wpPage.title}/>
        ) : null }
        
  
        {data.wpPage.uri===uriEvents ? (
           <EventPage />
        ) : null }

        {data.wpPage.uri===uriLandmark ? (
           <LandmarkPage />
        ) : null }

      {data.wpPage.uri===uriBuildingReq ? (
        <BuildingReqPage />
        ) : null }

        {data.wpPage.uri===uriOrigins ? (
          <BungalowOrigins />
        ) : null }

        {data.wpPage.uri===uriEarlyHistory ? (
          <EarlyHistory />
          ) : null }

          {data.wpPage.uri===uriWhat ? (
             <WhatBungalow />
            ) : null }

          {data.wpPage.uri===uriBoD ? (
             <BoDPage />
            ) : null }
        


        <Wrapper>
        <ContentWrapper>
            <PageContent>
                <Content dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
               
                {data.wpPage.uri===uriShop ? (
             <ShopPage />
            ) : {data.wpPage.uri===uriArch ? (
             <ArchPage />
            ) : null } }  
                  
            </PageContent>
        </ContentWrapper>
        </Wrapper>
             
    </Layout>
  )

}

export default PageTemplate

export const pageQuery = graphql`
    query($id: String!) {
        wpPage(id: { eq: $id }) {
            id
            title
            status
            content
            uri
            slug
            featuredImage {
            node {
                id
                localFile {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                    fluid(maxWidth: 1920) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                    }
                }
                }
            }
            }
            wpChildren {
            nodes {
                ... on WpPage {
                id
                uri
                slug
                title
                }
            }
            }
            wpParent {
            node {
                ... on WpPage {
                id
                title
                uri
                slug
                wpChildren {
                    nodes {
                    ... on WpPage {
                        id
                        title
                        uri
                        slug
                       }
                     }
                   }
                }
              }
            }
          }
        }
`
