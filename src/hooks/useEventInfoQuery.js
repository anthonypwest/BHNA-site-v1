import { useStaticQuery, graphql } from "gatsby"

export const useEventInfoQuery = () => {
    const data = useStaticQuery(graphql`
    query EventTourQuery {
            wpPage(databaseId: {eq: 176}) {
              ACF_EventTour {
                section1
                section2
                sectionImg1 {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 700) {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                      }
                      gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                    }
                  }
                }
                sponsorLink1
                sponsorLink2
                sponsorHeading
                sponsorImg1 {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 700) {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                      }
                      gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                    }
                  }
                }
                sponsorImg2 {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 700) {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                      }
                      gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                    }
                  }
                }
              }
            }
          }

    `) 
    return data;
}
