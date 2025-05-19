import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
/*    width: 100%;
    max-width: 640px;
    border-left: 6px solid #fff;
  
  @media ${props => props.theme.breakpoints.tablet2} {
    max-height: 100%;
    /* height: 700px; */
    width: 100%;
    border-left: 0;
    border-top: 6px solid #fff;
  }

  @media ${props => props.theme.breakpoints.tablet2} {
    max-width: 100%;
    max-height: 580px;
  }  */
`


export const ParagraphIntro = styled.p`
   
    color: #fff;
    width: 100%;
    padding: 1.4rem 5rem 2rem 8.8rem;
    
    margin: auto; 
   
    font-size: 1.1rem;
    line-height: 1.8;


  @media ${props => props.theme.breakpoints.tablet2} {
    padding: 4rem 20px;
    
  }
`

export const Wrapper = styled.div`
/*    display: flex;
    background-color: ${props => props.theme.colors.main3};

    @media ${props => props.theme.breakpoints.tablet2} {
   flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.tablet2} {
    flex-direction: column;
    
  }  */

    padding: 0 24px;

    h3 {
    
  }


`
