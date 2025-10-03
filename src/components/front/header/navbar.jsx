import React, { useState } from 'react';
import '../Navbar/navbar.css'
import Image from '../../images/logo.png'
import Image2 from '../../images/bucket_cart_icon.png'
import { FaUserCircle } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

const Header= () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

return (
  <div>
  <Navbar className="navbar"expand="md">
    <NavbarBrand href="/"><img src={Image} alt='1'></img></NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/home/">Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Deals/">Deals</NavLink>
        </NavItem>
        <NavItem>
              <NavLink href="/sigin/"><FaUserCircle /><span className="sign">Signin</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart/"><img className='bucket-logo' src={Image2} alt='1'></img></NavLink>
            </NavItem>
       </Nav>
     
    </Collapse>
  </Navbar>
</div>
  )
}

export default Header