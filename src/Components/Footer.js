import React from 'react';
import styled from 'styled-components';


function Footer(props){

    return(
        <FooterContainer className="main-footer" style={{paddingtop:"0.5rem"}}>
        <div className="footer-middle">
        <div className="container">
        <div className="row">
        <div className="col-md-2">
           <h3>mystore.com</h3>
           <ul className="list-unstyled" style={{fontSize:"15px", color: "silver"}}>
              <li>19-35 Hazen Street,</li>
              <li>East Elmhurst, NY 11370</li>
              <br/>
              <li><i class="fas fa-mobile-alt"></i>&nbsp;{" "}<a href="tel:123-456-7890" style={{color:"white", fontSize:"0.85rem"}}>718-204-7211</a></li>
              <li><a href="sales@mystore.com" style={{color:"white"}}>sales@mystore.com</a></li>
            </ul>
        </div>
        <div className="col-md-2 ">
           <h6>CONTACT</h6>
           <ul className="list-unstyled" style={{fontSize:"15px", color: "silver"}}>
              <li>Contact Us</li>
            </ul>
        </div>
        <div className="col-md-2 ">
           <h6>MY ACCOUNT</h6>
           <ul className="list-unstyled" style={{fontSize:"15px"}} >
              <li><a href="/">My Account</a></li>
              <li><a href="/">My Orders</a></li>
              <li><a href="/">My Wish List</a></li>
              <li><a href="/">Order Tracking</a></li>
              <li><a href="/">Reward Points</a></li>
            </ul>
        </div>
        <div className="col-md-2">
           <h6>CUSTOMER SERVICES</h6>
           <ul className="list-unstyled" style={{fontSize:"15px"}}>
              <li><a href="/">Shipping Policy</a></li>
              <li><a href="/">Return & Refund Policy</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Help/FAQs</a></li>
            </ul>
        </div>
        <div className="col-md-2">
           <h6>VALUE SAVINGS</h6>
           <ul className="list-unstyled" style={{fontSize:"15px"}}>
              <li><a href="/">All Offers</a></li>
              <li><a href="/">5% off Flash Sale</a></li>
              <li><a href="/">10% off Store Sale</a></li>
              <li><a href="/">20% off Spotlight items</a></li>
              <li><a href="/">50% off Clearance Sale</a></li>
              <li><a href="/">Free Shipping Items</a></li>
            </ul>
        </div>
        <div className="col-md-2">
           <h6>FOLLOW US</h6>
           <i class="fab fa-facebook"></i>&nbsp;{" "}
           <i class="fab fa-twitter"></i>&nbsp;{" "}
           <i class="fab fa-instagram"></i>&nbsp;{" "}
           <i class="fab fa-youtube"></i>
           
        </div>
        </div>
        <br/>
        <hr style={{backgroundColor:"grey"}}/>
        <div className="footer-bottom" >
            <i class="fab fa-cc-amex fa-2x"></i>
            <i  style={{paddingLeft:"3rem"}}class="fab fa-cc-discover fa-2x"></i>
            <i style={{paddingLeft:"3rem"}} class="fab fa-cc-mastercard fa-2x"></i>
            <i style={{paddingLeft:"3rem"}} class="fab fa-cc-paypal fa-2x"></i>
            <i style={{paddingLeft:"3rem"}} class="fab fa-cc-visa fa-2x"></i>
            <i style={{paddingLeft:"3rem"}} class="fab fa-amazon-pay fa-2x"></i>
            <i style={{paddingLeft:"3rem"}} class="fab fa-google-pay fa-2x"></i>
            <i style={{paddingLeft:"3rem"}} class="fab fa-apple-pay fa-2x"></i>
            <text style={{ float:"right" , fontSize:"15px"}}> &copy;{new Date().getFullYear()} <a href="/" style={{color:"white"}}>mystore.com</a></text>
            <p  >
               
              
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
    padding-top: 1rem;
    padding-bottom: 1rem;
    
}

ul li a{
    color: var(--mainLightGrey);
}

ul li a:hover{
    color: var(--mainGrey);
}

`;