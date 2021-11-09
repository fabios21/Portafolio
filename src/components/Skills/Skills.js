import React from "react";
import { Container, Row } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import SoftSkills from "./SoftSkills";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        </Row>
        <h1 className="project-heading">
          <strong>Tecnologías </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong>Competencias</strong>
        </h1>
        <SoftSkills />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
