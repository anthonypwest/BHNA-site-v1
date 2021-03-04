import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image" 

export const Wrapper = styled.div`
    padding: 0 24px;
`






export const InnerWrapper = styled.div`
   max-width: ${props => props.theme.max.large};
   margin: 4rem auto;
   
   display: grid;
   grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    grid-template-areas:
              "L R"
              "L ."
              "L ."
              ". .";  

   /* @media ${props => props.theme.breakpoints.desktop} {
    grid-template-columns: 1fr;
    grid-template-areas:
              "T"
              "."
              "."
              ".";  
    max-width: ${props => props.theme.max.medium};
  } */

    @media ${props => props.theme.breakpoints.tablet2} {
    
    grid-template-columns: 1fr;
    grid-template-areas:
              "T"
              "."
              "."
              ".";  
    
  }

  
` 

export const StyledImg = styled(GatsbyImage)`
  /* max-height: 460px; */
  /* margin-bottom: 60px; */
  /* max-width: 100%; */
  
  grid-column: 2;
  grid-area: R;
  max-width: 100%;
  max-height: 460px;

  /* @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 1;
    grid-area: T;
    max-width: 80%;
    
  } */

    @media ${props => props.theme.breakpoints.tablet2} {
      grid-column: 1;
      grid-area: T;
      max-width: 100%;
  }
  
`


export const FAQ = styled.div`
  grid-column: 1;
  grid-area: L;

  @media ${props => props.theme.breakpoints.desktop} {
    display: block;
    grid-area: auto;
    max-width: ${props => props.theme.max.medium};
  }

    @media ${props => props.theme.breakpoints.tablet2} {
      display: block;
      grid-area: auto;
  }
`

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-family: "libre caslon text", serif;
  line-height: 1.4;
  padding-bottom: 0.5rem; 
`

export const P = styled.p`

color: ${props => props.theme.colors.dark1};
line-height: 1.5;
padding-bottom: 1.5rem; 
  
`