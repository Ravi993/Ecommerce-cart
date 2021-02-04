import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Modal, Button, Form, ModalDialog } from "react-bootstrap";
import Navigation from 'react-sticky-nav';
import './modal.css';


class Header extends Component {

    
 
    render() {
      return (
        
        <Navigation className= "row block-header center">
            <div>
                <NavbarBrand href="/"><h1>Small Shopping Cart</h1></NavbarBrand>
            </div>
            <div>
                <a href="#/cart">  
                   Cart{ ' |'}
                </a> {' '}
                <a href= "#/signin" onClick={this.props.openModal} >SignIn</a>
                
            </div>
            <Modal show={this.props.isOpen} onHide={this.props.closeModal}> 
                <ModalDialog > 
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
                                   Forget your password? Reset password
                               </Form.Text>
                           </Form.Group><br/>
                           <Form.Group controlId="formBasicCheckbox">
                               <Form.Check type="checkbox" label="Check me out" />
                           </Form.Group><br/>
                           <Form.Label>
                                No account? Create account
                           </Form.Label>
                           <Button className="modal-button" variant="warning" type="submit">
                              SIGN IN
                           </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      {' '}
                      <br/>
                    </Modal.Footer>
                </ModalDialog>
                
            </Modal>
        
        </Navigation>
        
      );
    }
  }
  
  export default Header;

