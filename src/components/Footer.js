import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="/" className="footer-logo-text">
              <span className="logo-emoji" aria-hidden="true">🐱</span>
              <span className="logo-name">Tiny</span>
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p className="footer-cat">Made with <span className="footer-cat-icon">🐱</span> · Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
