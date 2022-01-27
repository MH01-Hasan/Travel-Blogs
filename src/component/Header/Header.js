import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './Header.css'

const Header = () => {
    const{user,logout}=UseAuth()

    return (
        <div>
               <Navbar  bg="dark" variant="dark"  expand="lg">
            <Container>
                <Navbar.Brand href="#home">Travelers' Experiences</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <NavLink to='/home' className="header-nav" >Home</NavLink>
                    <NavLink to='/blogs' className="header-nav" >Blogs</NavLink>
                   {user?.email && <NavLink to='/dashboard' className="header-nav" >Dashboard</NavLink>}
                    
                    {!user?.email ?<NavLink to='/login' className="header-nav" >Login</NavLink>:
                 <Button  className='logout' onClick ={logout}>Log out</Button>}
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;