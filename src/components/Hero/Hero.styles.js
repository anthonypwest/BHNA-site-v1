import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 760px;
  margin-bottom: 0;

  @media ${props => props.theme.breakpoints.tablet2} {
    max-height: 100%;
    height: 700px;
  }
  
`

export const Wrapper = styled.div`
  position: relative;
  max-height: 760px;

  @media ${props => props.theme.breakpoints.tablet2} {
    max-height: 100%;
    height: 700px;
  }
  
`

export const Content = styled.div`
  max-width: ${props => props.theme.max.large};
  padding: 1rem 24px;
  margin: 0 auto;
  

 

    @media ${props => props.theme.breakpoints.tablet2} {
    /* max-height: 824px; */
    /* padding: 0 24px; */
    
  }
`

export const HeaderWrapper = styled.div`
  
  background: linear-gradient(180deg, rgba(0,0,0,.8), rgba(32, 31, 31, .5) 100%); 
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  height: 100%;
  width: 100%;
  max-height: 760px;
  

  font-family: ${props => props.theme.fonts.main};
  color: #fff;
  
  @media ${props => props.theme.breakpoints.tablet2} {
    max-height: 100%;
    height: 100%;
  }
 

  h1 {
    font-size: 5rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: left;
    font-family: ${props => props.theme.fonts.secondary};
    max-width: 65%;
    
    @media ${props => props.theme.breakpoints.tablet2} {
      max-width: 90%;
      font-size: 3rem;
  }
 

    /* @media ${props => props.theme.breakpoints.desktop2} {
      font-size: 5.5rem;
    }  */
  }

  h3 {
    margin-top: 6px;
    
    font-weight: 400;
    font-size: 1.5rem;
    

    @media ${props => props.theme.breakpoints.tablet2} {
      font-size: 1.2rem;
  }

    /* @media screen and (min-width: 768px) {
      font-size: 1.5rem;
      
    } */

   
  }



  .hero-line1 {
    margin-bottom: 2em;
  }

  .hero-line2 {
    margin-bottom: 2.4rem;
  }

  .tour-cta_btn {
      
      padding: 10px 32px;
      border: 2px solid #fff;
      color: #fff;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.4s ease;

      @media ${props => props.theme.breakpoints.tablet2} {
        padding: 8px 24px;
      }
      
  }

  .tour-cta_btn:hover {
      background-color: #fff;
      color: black;
  }

  .hero__details{
      color: #C0DF3C;
      font-weight: bold;
      font-size: 1.4rem;
  }

  /* @media ${props => props.theme.breakpoints.tablet2} {
    max-height: 824px;
      
      h1 {
      font-size: 4.4rem;
      }

      h3 {
        font-size: 1rem;
      }
      
    }  */

    .hero-line1 {
    margin-bottom: 1.3em;
  }

  .hero-line2 {
    margin-bottom: 2rem;
   }
   
  .tour__info {
    font-size: 1.2rem;
    letter-spacing: 1px;
   }



`
