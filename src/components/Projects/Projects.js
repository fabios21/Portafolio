import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import P1 from "../../Assets/Projects/P1.png";
import P2 from "../../Assets/Projects/P2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Mis proyectos </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P1}
              isBlog={false}
              title="Videogames Catalogue"
              description="Es un catálogo de videojuegos donde puedes acceder a la información detallada de cada uno de los juegos listados, filtrarlos por genero, buscarlos por nombre, ordenarlos alfabéticamente y por rating, y tienes la posibilidad de crear un nuevo elemento de videojuego."
              link="https://pi-videogames-m9f2y5m5d-fabios21.vercel.app"
              repo="https://github.com/fabios21/PI-Videogames"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P2}
              isBlog={false}
              title="Scientia - Ecommerce"
              description="Scientia es una Ecommerce basada en la comercialización de cursos virtuales de múltiples temáticas. Los usuarios pueden buscar, comprar, visualizar, crear y regalar cursos on demand."
              link="https://front-scientia-pf.vercel.app/"
              repo="https://github.com/Scientia-PF-nuevo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P2}
              isBlog={false}
              title="Scientia - Ecommerce"
              description="Scientia es una Ecommerce basada en la comercialización de cursos virtuales de múltiples temáticas. Los usuarios pueden buscar, comprar, visualizar, crear y regalar cursos on demand."
              link="https://front-scientia-pf.vercel.app/"
              repo="https://github.com/Scientia-PF-nuevo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
