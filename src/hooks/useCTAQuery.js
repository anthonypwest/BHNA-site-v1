import { useStaticQuery, graphql } from "gatsby" 

export const useCTAQuery = () => {
    const data = useStaticQuery(graphql`
          fragment ctaImage on WpMediaItem {
            localFile {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                        fluid(maxWidth: 720) {
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

        query onCTAQuery {
        cta: wpPage(databaseId: {eq: 39}) {
          ACF_HomePage {
            cta1Link
            cta1Text
            cta1Title
            cta2Link
            cta2Text
            cta2Title
            cta3Link
            cta3Text
            cta3Title
            what_is_link
            
            cta1Image {
              ...ctaImage
            }
            cta2Image {
                ...ctaImage
            }
            cta3Image {
                ...ctaImage
            }
          }
        }
      }

    `)

    return data;
}
