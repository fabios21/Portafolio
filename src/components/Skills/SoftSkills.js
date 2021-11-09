import React from "react";
import { Col, Row } from "react-bootstrap";

function SoftSkills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="soft-skills-icons">
        Trabajo en equipo
      </Col>
      <Col xs={4} md={2} className="soft-skills-icons">
        Solución de problemas
      </Col>
      <Col xs={4} md={2} className="soft-skills-icons">
        Autodidacta/ Determinado
      </Col>
      <Col xs={4} md={2} className="soft-skills-icons">
        Metodología Scrum
      </Col>
      <Col xs={4} md={2} className="soft-skills-icons">
        Pensamiento Crítico
      </Col>
    </Row>
  );
}

export default SoftSkills;
