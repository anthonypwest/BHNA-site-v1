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

export const SectionCopyRed = styled.p`
  grid-column: 1;
  line-height: 1.5;
  background-color: ${props => props.theme.colors.main3};
  color: #fff;
  width: 100%;

`

export const SectionImg = styled.div`
  grid-column: 2;
  padding-bottom: 1rem;

  @media ${props => props.theme.breakpoints.tablet2} {
    grid-column: 1;
    padding: 0;
  }
`

export const SectionCopyR = styled.p`
  grid-column: 2;
  line-height: 1.5;

 @media ${props => props.theme.breakpoints.tablet2} {
    grid-column: 1;
    padding: 0;
  }
`

export const SectionImgR = styled.div`
  grid-column: 1;
  padding-bottom: 1rem;

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

export const JoinWrapper = styled.section`
    padding: 4.4rem 0;

    background-color: ${props => props.theme.colors.secondary};
`

export const Content = styled.div`
   max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    color: ${props => props.theme.colors.light1};

    p {
        width: 60%;
        margin: 0 auto;
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 24px;
        line-height: 1.2;
        padding: 1rem 24px;
        margin-bottom: 2rem;
        letter-spacing: 0.5px;

        @media ${props => props.theme.breakpoints.tablet2} {
      font-size: 1.2rem;
      line-height: 1.3;
      width: 100%;
       }
    }

    .support-btn{
      padding: 10px 32px;
      border: 2px solid #fff;
      color: #fff;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.4s ease;

      @media ${props => props.theme.breakpoints.tablet2} {
      width: 300px;
      margin: 0 auto;
       }
      
    }

    .support-btn:hover {
        background-color: #fff;
      color: black;
    }


    .join-btn {
      
      padding: 10px 32px;
      border: 2px solid #fff;
      color: #fff;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.4s ease;
      
  }
  
  .join-btn:hover {
      background-color: #fff;
      color: black;
  }


  @media ${props => props.theme.breakpoints.tablet2} {
      padding: 0 24px;
       }

`


export const BTN = styled.div`

    :not(:last-child) {
      margin-right: 2rem ;
    }
    display: inline-block;
  

    @media ${props => props.theme.breakpoints.tablet2} {
        display: flex;
        flex-direction: column;
        margin: 2.3rem auto;
        /* padding: 0 24px; */
       }
    
    
`

// export const InnerBtnWrapper = styled.div`
//     max-width: 300px;
    
// `
