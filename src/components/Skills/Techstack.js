import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiPython,
  DiGit,
  DiBootstrap,
  DiHeroku,
} from "react-icons/di";
import { SiRedux, SiFirebase, SiCss3  } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p className="p">HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p className="p">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge />
        <p className="p">Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="p">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p className="p">Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="p">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <p className="p">PstgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="p">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <p className="p">Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="p">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="p">Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHeroku />
        <p className="p">Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel />
        <p className="p">Vercel</p>
      </Col>
    </Row>
  );
}

export default Techstack;
