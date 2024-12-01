import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <footer className="bg-body-tertiary" style={{ height: "80px" }}>
      <Container className="h-100">
        <Row className=" h-100 align-items-center">
          <Col xs="auto" className="d-flex align-items-center">
            <img
              src="../src/assets/wsei-fav-icon-hd.png"
              alt="WSEI logo"
              style={{ height: "60px" }}
            />
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <p className="m-0">Autor: kacper.jewula@microsoft.wsei.edu.pl</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
