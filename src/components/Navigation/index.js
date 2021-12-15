import axios from 'axios';
import React, { useState } from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'

const Navigation = (props) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const logout = () => {
    axios.post('http://localhost:4000/v1/auth/logout', '', {
      withCredentials: true,
    })
      .then((res) => {
        alert('berhasil logout');
        return window.location.href = '/login';
      })
      .catch((err) => {
        alert('gagal logout')
      });
  }

  let menu;
  if(!props.user) {
    menu = (
      <>
        <NavItem className='ms-5'>
          <NavLink href="/register">Daftar</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Masuk</NavLink>
        </NavItem>
      </>
    );
  } else {
    menu = (
      <UncontrolledDropdown inNavbar nav className='ms-5'>
        <DropdownToggle caret nav>{ props.user.name }</DropdownToggle>

        <DropdownMenu dark end>
          <DropdownItem>
            <NavLink onClick={logout}>Logout</NavLink>
          </DropdownItem>
        </DropdownMenu>

      </UncontrolledDropdown>
    );
  }
  
  return (
    <>
      <Navbar color="dark" expand="md" container dark>
        <NavbarBrand href="/">Scholarship and Course</NavbarBrand>

        <NavbarToggler onClick={() => {setNavbarOpen(!isNavbarOpen)}} />

        <Collapse isOpen={isNavbarOpen} navbar>
          <Nav className="ms-auto" navbar>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>Beasiswa</DropdownToggle>

              <DropdownMenu end dark>
                <DropdownItem>
                  <NavLink href="/scholarships">Pendidikan</NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink href="/courses">Kursus</NavLink>
                </DropdownItem>
              </DropdownMenu>

            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="/about">Tentang Kami</NavLink>
            </NavItem>

            { menu }

          </Nav>
        </Collapse>

      </Navbar>
    </>
  )
}

export default Navigation
