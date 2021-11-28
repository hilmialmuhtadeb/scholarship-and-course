import React, {useState} from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'

const Navigation = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <div>
      <Navbar
        color="light"
        expand="md"
        container
        light
      >
        <NavbarBrand href="/">
          S&C
        </NavbarBrand>
        <NavbarToggler onClick={() => {
          setNavbarOpen(!isNavbarOpen)
        }} />
        <Collapse isOpen={isNavbarOpen} navbar>
          <Nav
            className="ms-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/">
                Utama
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Beasiswa
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink href="/scholarship">
                    Pendidikan
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/course">
                    Kursus
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#">
                Tentang Kami
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
