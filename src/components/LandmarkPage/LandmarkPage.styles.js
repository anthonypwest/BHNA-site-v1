import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image" 

export const Wrapper = styled.div`
    
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
              ". .";  ;

   @media ${props => props.theme.breakpoints.desktop} {
    grid-template-columns: 1fr;
    grid-template-areas:
              "T"
              "."
              "."
              ".";  
    max-width: ${props => props.theme.max.medium};
  }

    @media ${props => props.theme.breakpoints.tablet2} {
    grid-template-columns: 1fr;
   
    padding: 0 20px;
  }


    /* max-width: ${props => props.theme.max.large};
    margin: 3rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2rem; */
    
    /* max-width: ${props => props.theme.max.large};
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    grid-template-areas:
              "L R";

   */
  
` 

export const StyledImg = styled(GatsbyImage)`
  /* max-height: 460px; */
  /* margin-bottom: 60px; */
  /* max-width: 100%; */
  
  grid-column: 2;
  grid-area: R;

  @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 1;
    grid-area: T;
    max-width: 80%;
    
  }

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
  
`

export const P = styled.p`

color: ${props => props.theme.colors.dark1};
margin: 1rem 0;
line-height: 1.5;
  
`