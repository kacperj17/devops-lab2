import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBarMenu({ items }) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{height: "80px", paddingTop: "0px", paddingBottom: "0px"}}>
        <Container>
          <Navbar.Brand href="/">
            Frameworki frontendowe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {items.map((item) => (
                <Nav.Link href={item.url} key={item.id}>{item.label}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarMenu;
