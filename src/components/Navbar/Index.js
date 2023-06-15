import React from 'react';
import { 
    Nav, 
    NavIcon, 
    NavLink, 
    Bars,
    P } from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to = '/'>Food</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu <Bars /></p>
                    
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
