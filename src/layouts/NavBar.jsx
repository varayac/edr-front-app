import { Container, Navbar, Nav } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
import css from './NavBar.module.css'

function NavBar() {
  return (
    <>
      <Navbar className={css.navBg} variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            <i className='fa-solid fa-building'></i> The Office
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to={'/'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={'/clients'}>
                Clients
              </Nav.Link>
              <Nav.Link as={Link} to={'/sales'}>
                Sales
              </Nav.Link>
              <Nav.Link as={Link} to={'/products'}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to={'/purchases'}>
                Purchases
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className={css.section}>
        <Outlet></Outlet>
      </section>
    </>
  )
}

export default NavBar
