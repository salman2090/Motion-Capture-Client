import React from 'react';
import './Navigation.css';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';


const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
      <>
      <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg" className="p-2 header-font">
          <Container>
              <Navbar.Brand className="fs-3" href="#home">Motion Capture</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={HashLink} className="text-dark fs-5" to="/home#home">Home</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#cameras" className="text-dark fs-5">Cameras</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#lenses" className="text-dark fs-5">Lenses</Nav.Link>
                  {
                      user.email ?
                      <Nav.Link as={Link} to="/dashboard" className="text-dark fs-5">Dashboard</Nav.Link>
                      :
                      null
                  }
                  <Navbar.Text>
                   <a href="#login">{user?.displayName}</a>
                  </Navbar.Text>
                  {
                      user.email ? 
                      <Button onClick={logOut} variant="light" className="text-dark fs-5">Logout</Button>
                      :
                      <Nav.Link as={Link} to="/login" className="text-dark fs-5">Login</Nav.Link>
                  }
              </Navbar.Collapse>
          </Container>
      </Navbar>
  </>
    );
};

export default Navigation;