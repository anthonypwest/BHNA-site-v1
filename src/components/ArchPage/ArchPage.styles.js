import styled from "styled-components"




  export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  max-width: 1280px;
  margin: 0 auto 2rem auto;
  padding-top: 2rem;

 
  
  
  @media ${props => props.theme.breakpoints.tablet2} {
   
    grid-template-columns: 1fr 1fr ;
  }
 
  @media ${props => props.theme.breakpoints.mobile} {
   
   grid-template-columns: 1fr ;
 }

  `
