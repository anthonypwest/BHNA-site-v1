import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.svg"

import { FooterWrapper, Content, FooterBranding, FooterDiv, SocialIcons, P, DIV, Copyright } from "./Footer.styles"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/Youtube';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const Footer = () => {

    return (
    <FooterWrapper>
    <Content>
        <FooterBranding>
        <img src={Logo} alt="Bungalow Heaven logo"/>
        <div className="sm-line"></div>
        <div className="register">
        <p className="bhna-register">National Register of Historic Places</p>
        </div>
        </FooterBranding>

        
        <FooterDiv>
            <DIV>
            <h4>Contact Us</h4>
            <div className="line"></div>
            <h4>
            Bungalow Heaven Neighborhood Association (BHNA)
            </h4>
            <P>
            <ContactMailIcon />
           
            <span>
            P.O Box 40812
            Pasadena, CA 91114-7872
            </span>
            </P>
            <P>
            <EmailIcon />
            <span>
            bhna@bungalowheaven.org           
            </span>
            </P>

            <P>
            <PhoneIcon />
            <span>
            626-585-2172            
            </span>
            </P>

            </DIV>

            {/* <DIV>     
            <h4>More Info</h4>
            <div className="line"></div>
            <Link to="/">
                Term & Condition
            </Link>
            </DIV> */}

            <DIV>     
            <h4>Follow Us</h4>
            <div className="line"></div>
            <SocialIcons>
                
            <InstagramIcon fontSize="large" />
            <YouTubeIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
            </SocialIcons>
            </DIV>
        </FooterDiv>

       

    </Content>

        <Copyright>
            <p className="bhna-copyright">© Bungalow Heaven Landmark District. All rights reserved.</p>
        </Copyright>
     
    </FooterWrapper>
    
 )
}

export default Footer