// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./uscMobile/logoHeader.png";
import "./navBar.css";

export default function NavBarMobile() {
  const scrollToElement = (element: string) =>
    setTimeout(() => {
      document.getElementById(element)?.scrollIntoView({ behavior: "smooth" });
    }, 500);

  const linkName = ["Home", "Challenge", "Solution", "MVP", "Roadmap", "Team"];
  return (
    <>
      {[false].map((expand, i) => (
        <Navbar
          key={`navbar-list-${i}`}
          bg="dark"
          expand={false}
          className="mb-3"
          collapseOnSelect={true}
        >
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <button className="connectBtnNav">CONNECT WALLET</button>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} style={{ width: "170px" }} alt="logo1" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {linkName.map((n: any, i: any) => (
                    <Nav.Link
                      href="#"
                      key={`navbar-mobile-link-${i}`}
                      onClick={() => scrollToElement(n)}
                    >
                      {n}
                    </Nav.Link>
                  ))}

                  <Nav.Link href="/">Launch App</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
