import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';
import Logo from '../assets/img/Logo';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=> {
      const onScroll=()=>{
          if(window.scrollY > 50){
              setScrolled(true);
          }else{
              setScrolled(false);
          }
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  }
  return (
    <Router>

      <>
        {['xl'].map((expand) => (
          <Navbar key={expand} bg="light" variant="light" expand={expand} className="mb-3">
            <Container>
              <Navbar.Brand> <Logo/> </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Neon Code
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-1">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#service" className={activeLink === 'service' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('service')}>Service</Nav.Link>
                    <Nav.Link href="#portofolio" className={activeLink === 'portofolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portofolio')}>Portofolio</Nav.Link>
                    <Nav.Link href="#team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('team')}>Team</Nav.Link>
                    <Nav.Link href="#contactus" className={activeLink === 'contactus' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contactus')}>Contact Us</Nav.Link>                
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </Router>
  );
}

export default NavBar;