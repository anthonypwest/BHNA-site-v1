import { useStaticQuery, graphql } from "gatsby"

export const useArchQuery = () => {
    const data = useStaticQuery(graphql`
      query ArchQuery {
        wpPage(databaseId: {eq: 1203}) {
    ACF_ArchStyles {
      archImage1 {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1080) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      archImage2 {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1080) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      archImage3 {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1080) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      archImage4 {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1080) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      archImage5 {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1080) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      archImage6 {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1080) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      archStylesText1
      mainSection1
      mainSection2
      mainSection3
      mainSection4
      mainSection5
      mainSection6
      archLink1
      archLink2
      archLink3
      archLink4
      archLink5
      archLink6
      archLink7
      
    }
  }
      }
    `)

    return data;
}
