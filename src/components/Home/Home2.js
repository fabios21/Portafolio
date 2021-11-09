import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Sobre mí
            </h1>
            <p className="home-about-body">
            Apasionado por la tecnología, con experiencia en Anotación de Datos 3D, autodidacta con deseos constante de aprender. Me gustan los videojuegos, el modelado 3D y la fauna silvestre.
            <br />
            <br />
            Mis lenguajes favoritos son 
              <i>
                <b className="blue"> Javascript </b>
              </i>
              y
              <i>
                <b className="blue"> Python.</b>
              </i>
              <br />
              
              <br />
              Cuento con gran disposición para aprender nuevas herramientas/tecnologías y escalar en cada una de mis habilidades. Me adapto muy bien a el trabajo en equipo y no tengo problemas en colaborar para cumplir con los objetivos deseados. Soy determinado y responsable con mis compromisos, metas personales y profesionales.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contactame</h1>
            <p>
              Si te interesa mi perfil sientete libre de <span className="purple"> contactarte </span> conmigo.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fabios21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fabio-silva-developer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:fabsillopez@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <ImMail4 />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
