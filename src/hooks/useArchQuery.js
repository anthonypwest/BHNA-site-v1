import { useStaticQuery, graphql } from "gatsby"

export const useArchQuery = () => {
    const data = useStaticQuery(graphql`
      fragment productImg on WpMediaItem {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 700)
          }
        }
      }

    query ArchQuery {
      product: wpPage(databaseId: {eq: 112}) {
        ACF_Shop {
          linkBook
          productName1
          productName2
          productName3
          productName4
          productName5
          productName6
          productName7
          productName8
          productName9
          productPrice1
          productPrice2
          productPrice3
          productPrice4
          productPrice5
          productPrice8
          productPrice7
          productPrice6
          productPrice9

          productImage1 {
            ...productImg
          }
          productImage2 {
            ...productImg
          }
          productImage3 {
            ...productImg
          }
          productImage4 {
            ...productImg
          }
          productImage5 {
            ...productImg
          }
          productImage6 {
            ...productImg
          }
          productImage7 {
            ...productImg
          }
          productImage8 {
            ...productImg
          }
          productImage9 {
            ...productImg
          }
        }
      }
    }
    
    `)
    return data;
  }
