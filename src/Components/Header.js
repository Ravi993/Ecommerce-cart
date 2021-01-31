import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Modal, Button } from "react-bootstrap";


class Header extends Component {
 
    render() {
      return (
        <Navbar className= "row block center">
            <div>
                <NavbarBrand href="/"><h1>Small Shopping Cart</h1></NavbarBrand>
            </div>
            <div>
                <a href="#/cart">  
                   Cart{ ' |'}
                </a> {' '}
                <a href= "#/signin">SignIn</a>
            </div>
            <>
                <div
                  className="d-flex align-items-center justify-content-center"
                
                >
                   <Button variant="primary" onClick={this.props.openModal}>
                        Launch modal
                   </Button>
                </div>
                <Modal show={this.props.isOpen}> 
                   <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                       <Button variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </Navbar>
        
      );
    }
  }
  
  export default Header;

