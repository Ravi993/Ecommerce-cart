import React  from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function Header(props){ 
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
        </Navbar>
    );
}