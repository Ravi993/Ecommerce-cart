import React from 'react';
import styled from 'styled-components';

function Footer(props){

    return(
        <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
        <div className="row">
        <div className="col-md-3 col-md-6">
           <h4>Lorem ipsum</h4>
           <ul className="list-unstyled">
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
            </ul>
        </div>
        <div className="col-md-3 col-md-6">
           <h4>Lorem ipsum</h4>
           <ul className="list-unstyled">
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
            </ul>
        </div>
        <div className="col-md-3 col-md-6">
           <h4>Lorem ipsum</h4>
           <ul className="list-unstyled">
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
            </ul>
        </div>
        <div className="col-md-3 col-md-6">
           <h4>Lorem ipsum</h4>
           <ul className="list-unstyled">
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
              <li>Lorem, ipsum</li>
            </ul>
        </div>
        </div>
        <div className="footer-bottom">
            <p className="text-xs-center">
               &copy;{new Date().getFullYear()} City Guide App- All Rights Reserved
            </p>
        </div>
        </div>   
        </div>  
        </FooterContainer>
    
    )
}


export default Footer;

const FooterContainer=styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

`;