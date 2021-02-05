import React from 'react';
import styled from 'styled-components';


function Footer(props){

    return(
        <FooterContainer className="main-footer" style={{paddingtop:"1rem"}}>
        <div className="footer-middle">
        <div className="container">
        <div className="row">
        <div className="col-md-2">
           <h4>mystore.com</h4>
           <ul className="list-unstyled">
              <li>19-35 Hazen Street,</li>
              <li>East Elmhurst, NY 11370</li>
              <br/>
              <li>718-204-7211</li>
              <li>sales@mystore.com</li>
            </ul>
        </div>
        <div className="col-md-2 ">
           <h5>CONTACT</h5>
           <ul className="list-unstyled">
              <li>Contact Us</li>
            </ul>
        </div>
        <div className="col-md-2 ">
           <h5>MY ACCOUNT</h5>
           <ul className="list-unstyled">
              <li>My Account</li>
              <li>My Orders</li>
              <li>My Wish List</li>
              <li>Order Tracking</li>
              <li>Reward Points</li>
            </ul>
        </div>
        <div className="col-md-2">
           <h5>CUSTOMER SERVICES</h5>
           <ul className="list-unstyled">
              <li>Shipping Policy</li>
              <li>Return & Refund Policy</li>
              <li>Privacy Policy</li>
              <li>Help/FAQs</li>
            </ul>
        </div>
        <div className="col-md-2">
           <h5>VALUE SAVINGS</h5>
           <ul className="list-unstyled">
              <li>All Offers</li>
              <li>5% off Flash Sale</li>
              <li>10% off Store Sale</li>
              <li>20% off Spotlight items</li>
              <li>50% off Clearance Sale</li>
              <li>Free Shipping Items</li>
            </ul>
        </div>
        <div className="col-md-2">
           <h5>FOLLOW US</h5>
           
        </div>
        </div>
        <br/>
        <div className="footer-bottom">
            <p className="text-xs-center " style={{textAlign:"right"}}>
               &copy;{new Date().getFullYear()} mystore.com
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