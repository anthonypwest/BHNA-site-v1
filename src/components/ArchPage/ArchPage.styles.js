import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image" 

export const Wrapper = styled.div`
    padding: 0 24px;

    h3 {
    
  }
`

export const Section = styled.section`
  margin: 72px auto 4rem auto; 
  
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

  h3 {
    
  }

  @media ${props => props.theme.breakpoints.tablet2} {
    grid-template-columns: 1fr ;
  }
  
`

export const SectionCopy = styled.p`
  grid-column: 1;
  line-height: 1.5;
  
`

export const SectionImg = styled.div`
  grid-column: 2;
  padding-bottom: 1rem;

  @media ${props => props.theme.breakpoints.tablet2} {
    grid-column: 1;
    padding: 0;
  }
`

export const StyledImg = styled(GatsbyImage)`
  /* margin: 3rem 0; */
`


export const InnerWrapper = styled.div`
   /* max-width: ${props => props.theme.max.large};
   margin: 4rem auto;
   
   display: grid;
   grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    grid-template-areas:
              "L R"
              "L ."
              "L ."
              ". .";   */

   /* @media ${props => props.theme.breakpoints.desktop} {
    grid-template-columns: 1fr;
    grid-template-areas:
              "T"
              "."
              "."
              ".";  
    max-width: ${props => props.theme.max.medium};
  } */

    /* @media ${props => props.theme.breakpoints.tablet2} {
    
    grid-template-columns: 1fr;
    grid-template-areas:
              "T"
              "."
              "."
              ".";  
    
  } */

  
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
