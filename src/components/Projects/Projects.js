import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DiseasePrediction from "../../Assets/Projects/DiseasePrediction.png";
import ERation from "../../Assets/Projects/E-Ration.png";
import CryptoCurrency from "../../Assets/Projects/CryptoCurrency.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CryptoCurrency}
              isBlog={false}
              title="VaultX"
              description="VaultX is a comprehensive cryptocurrency portfolio dashboard that allows users to track and manage their digital assets in real-time. It provides detailed insights into portfolio performance, market trends, and personalized investment recommendations, empowering users to make informed decisions in the dynamic world of cryptocurrency."
              demoLink="https://vaultx-website-1.onrender.com"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ERation}
              isBlog={false}
              title="E-Ration Distribution Management System"
              description="Built an E-Ration Distribution Management System using Next.js and Tailwind CSS that automates monthly ration delivery scheduling from database records and renders real-time slot availability. Supports dark mode and intuitive booking interface, streamlining ration distribution for families with easy slot management."
              demoLink="https://e-ration-shop-management.vercel.app"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DiseasePrediction}
              isBlog={false}
              title="Skin Disease Prediction"
              description="Developed an AI-powered web application for early detection of skin diseases, including cancerous lesions like melanoma and common dermatological conditions. Users upload skin lesion images, receive instant predictions with 90+% accuracy, confidence scores, and personalized dietary recommendations for recovery."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
