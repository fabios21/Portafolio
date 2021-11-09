import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#007BA4",
    grade3: "#16ABDC",
    grade2: "#4FBCDF",
    grade1: "#A0CBE1",
    grade0: "#F1F1F1",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong>Actividad GitHub</strong>
      </h1>
      <GitHubCalendar
        username="fabios21"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
