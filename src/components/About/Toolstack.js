import React from "react";
import { Col, Row } from "react-bootstrap";
import Windows from "../../Assets/TechIcons/Windows.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Jupyter from "../../Assets/TechIcons/Jupyter.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Jupyter} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Jupyter Notebook</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
