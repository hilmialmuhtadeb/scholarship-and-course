import React, { useState } from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, Button } from 'reactstrap'
import { Logo } from '../../assets'
import './navigation.css';
import { logoutUser } from '../../utils/UserHandler';

const Navigation = (props) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  let menu;
  if(!props.user) {
    menu = (
      <>
        <NavItem className='ms-lg-4'>
          <NavLink href="/register">Daftar</NavLink>
        </NavItem>
        <NavItem className='ms-lg-4'>
          <a href="/login">
            <Button color='primary' outline className='px-4'>Masuk</Button>
          </a>
        </NavItem>
      </>
    );
  } else {
    menu = (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>{ props.user.name }</DropdownToggle>

        <DropdownMenu light end>
          <DropdownItem>
            <NavLink onClick={logoutUser}>Keluar</NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink href={"/favorites/" + props.user.username}>Beasiswa Disimpan</NavLink>
          </DropdownItem>
        </DropdownMenu>

      </UncontrolledDropdown>
    );
  }
  
  return (
    <Navbar color="light" expand="md" light className='shadow-sm px-0 px-lg-4'>
      <NavbarBrand href="/"  className='d-flex align-items-center'>
        <img className="img-fluid" src={Logo} alt="logo snc"/>
        <span className="navbar logo-text">Scholarship and Course</span>
      </NavbarBrand>

      <NavbarToggler onClick={() => {setNavbarOpen(!isNavbarOpen)}} />

      <Collapse isOpen={isNavbarOpen} navbar>
        <Nav className="me-auto" navbar>

          <UncontrolledDropdown inNavbar nav className='ms-lg-4'>
            <DropdownToggle caret nav>Beasiswa</DropdownToggle>

            <DropdownMenu light end>
              <DropdownItem>
                <NavLink href="/scholarships">Pendidikan</NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink href="/courses">Kursus</NavLink>
              </DropdownItem>
            </DropdownMenu>

          </UncontrolledDropdown>

          <NavItem className='ms-lg-4'>
            <NavLink href="/about">Tentang Kami</NavLink>
          </NavItem>

        </Nav>
        <Nav className="ms-auto" navbar>
          { menu }
        </Nav>
      </Collapse>

    </Navbar>
  )
}

export default Navigation
