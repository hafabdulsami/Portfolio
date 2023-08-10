import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {SiHackerrank} from 'react-icons/si'

const Footer = () => {

    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-text">
            <span>Dedicated to creating impactful solutions!</span>
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Copyright © Me</span>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/hafabdulsami"
                  style={{ color: "white" }}
                  target="_blank" 
                  className ="icon-colour"
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/abdulsami699"
                  style={{ color: "white" }}
                  target="_blank" 
                  className ="icon-colour"
                  rel="noopener noreferrer"
                  aria-label="twitter"
                >
                  <SiHackerrank/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdulsami-1411b6267"
                  style={{ color: "white" }}
                  target="_blank" 
                  className ="icon-colour"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer