import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Modal, Button, Form, ModalDialog } from "react-bootstrap";
import Navigation from 'react-sticky-nav';
import './modal.css';


class Header extends Component {

    
 
    render() {
      return (
        
        <Navbar className= "block-header" >
            
            <div>
                
               <NavbarBrand href="/"  style={{color:"white"}}> <img src="/image/logo1.png" alt="logo" style={{width:"290px"}}/></NavbarBrand>
            </div>
            <div>

    
                 <a href= "#/signin" onClick={this.props.openModal} style={{color:"white"} } ><i class="far fa-user"></i>&nbsp;Sign in{ ' |'}</a>
                 {' '}               
                <a href="#/cart" style={{color:"white"}}>  
                <i class="fas fa-shopping-cart"></i>&nbsp;Cart
                </a>
              
                
            </div>
            <Modal show={this.props.isOpen} onHide={this.props.closeModal} > 
                <ModalDialog style={{width:"80%"}}> 
                  <Modal.Header>
                       <Modal.Title>Sign in to your account</Modal.Title>  
                  </Modal.Header ><br/>
                  <Modal.Body>
                      <Form>  
                           <Form.Group controlId="formBasicEmail">
                              <Form.Label>Username *</Form.Label><br/>
                              <Form.Control type="email" placeholder="test@test.com" /><br/>
                              <Form.Text className="text-muted">
                                   We'll never share your email with anyone else.
                              </Form.Text>
                           </Form.Group><br/>

                           <Form.Group controlId="formBasicPassword">
                               <Form.Label>Password *</Form.Label><br/>
                               <Form.Control type="password" placeholder="Password" /><br/>
                               <Form.Text className="text-muted">
                                   Forget your password?&nbsp;<a href="/" style={{color:"orange"}}>Reset password</a> 
                               </Form.Text>
                           </Form.Group><br/>
                           <Form.Group controlId="formBasicCheckbox">
                               <Form.Check type="checkbox" label="Check me out" />
                           </Form.Group><br/>
                           <Form.Label>
                                No account?&nbsp;<a href="/" style={{color:"orange"}}>Create account</a>
                           </Form.Label>
                           <br/>
                           <Button className="modal-button" variant="warning" type="submit" style={{width:"100px"}}>
                              SIGN IN
                           </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      {' '}
                      <br/>
                      
                      <div className=" form-block">Or</div>
                      <br/>
                      <a className="btn btn-block btn-social btn-facebook">
                          <span class="fa fa-facebook"></span>&nbsp;
                          Sign in with Facebook
                      </a>
                      <a className="btn btn-block btn-social btn-twitter">
                          <span class="fa fa-twitter"></span>&nbsp;
                          Sign in with Twitter
                      </a>
                      <a className="btn btn-block btn-social btn-google">
                          <span class="fa fa-google-plus"></span>&nbsp;
                          Sign in with Google
                      </a>
                      
                    </Modal.Footer>
                </ModalDialog>
                
            </Modal>
            
            
        
        </Navbar>
        
      );
    }
  }
  
  export default Header;

