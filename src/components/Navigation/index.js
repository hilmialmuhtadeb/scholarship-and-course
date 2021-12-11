import React, {useState} from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'

const Navigation = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  
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

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>Ni Wayan Windayani</DropdownToggle>

              <DropdownMenu dark end>
                <DropdownItem>
                  <NavLink href="/login">Logout</NavLink>
                </DropdownItem>
              </DropdownMenu>

            </UncontrolledDropdown>

          </Nav>
        </Collapse>

      </Navbar>
    </>
  )
}

export default Navigation
