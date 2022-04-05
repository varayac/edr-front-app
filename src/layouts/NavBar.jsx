import { Container, Navbar, Nav } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Navbar className='navBg' bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to={'/'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={'/users'}>
                Users
              </Nav.Link>
              <Nav.Link as={Link} to={'/sales'}>
                Sales
              </Nav.Link>
              <Nav.Link as={Link} to={'/productos'}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to={'/purchases'}>
                Purchases
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  )
}

export default NavBar
