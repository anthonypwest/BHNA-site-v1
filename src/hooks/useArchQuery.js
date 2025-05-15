import { useStaticQuery, graphql } from "gatsby"

export const useArchQuery = () => {
    const data = useStaticQuery(graphql`
      query ArchQuery {
        wpPage(databaseId: {eq: 1203}) {
    ACF_ArchStyles {
      arch_image_1 {
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
      arch_styles_text1
      main_section
      arch_link
      
    }
  }
      }
    `)

    return data;
}
