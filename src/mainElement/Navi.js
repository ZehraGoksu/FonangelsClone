import React, { useState } from 'react';
import '../style/Navi.css';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle,
  DropdownMenu, DropdownItem, NavLink, NavItem, Button
} from 'reactstrap';
import logo from '../assets/images/logo.png';
import { RiKey2Fill, RiArrowDropDownLine } from 'react-icons/ri';
import { BsFillPersonPlusFill } from 'react-icons/bs';



function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <Navbar {...args} className="main" expand='xxl'>
      <NavbarBrand href="/" className='mx-xl-5 ms-xxl-4 me-xxl-5 mx-md-5' >
        <img src={logo} alt='Sayfa Logosu' className='logoSize' /></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className='me-5' >
        <Nav navbar className='me-auto'>
          <UncontrolledDropdown nav inNavbar className='me-4 me-xl-2'>
            <DropdownToggle nav className='dropdown'>
              Yatırımcı <RiArrowDropDownLine />
            </DropdownToggle>
            <DropdownMenu end className='p-3 dropdownLists'>
              <DropdownItem>Yatırım Yap</DropdownItem>
              <DropdownItem>Destek Merkezi</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar className='me-4 me-xl-2'>
            <DropdownToggle nav className='dropdown'>
              Girişimci <RiArrowDropDownLine />
            </DropdownToggle>
            <DropdownMenu end className='p-3  dropdownLists'>
              <DropdownItem>Projeni Gönder</DropdownItem>
              <DropdownItem>Destek Merkezi</DropdownItem>
              <DropdownItem>Gerekli Fona Nasıl Ulaşırım</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar className='me-4 me-xl-2'>
            <DropdownToggle nav className='dropdown'>
              Kurumsal <RiArrowDropDownLine />
            </DropdownToggle>
            <DropdownMenu end className='p-3 dropdownLists'>
              <DropdownItem>Hakkımızda</DropdownItem>
              <DropdownItem>Takımımız</DropdownItem>
              <DropdownItem>Yönetim Kurulu</DropdownItem>
              <DropdownItem>Yatırım Komitesi</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink className='dropdown' href="https://github.com/reactstrap/reactstrap">
              Kampanyalar
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <Button color="light" className='loginBtn py-2 px-3 me-2 '> Giriş <RiKey2Fill /></Button>
          </NavItem>

          <NavItem>
            <Button className='py-2 px-4 accountBtn'> Hesap Oluştur <BsFillPersonPlusFill /></Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )

}

export default Navi;
