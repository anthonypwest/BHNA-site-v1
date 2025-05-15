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
      archStylesText1
      mainSection
      archLink
      
    }
  }
      }
    `)

    return data;
}
