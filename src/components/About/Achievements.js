// src/components/About/Achievements.js
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FaTrophy, FaCertificate, FaCode, FaUsers } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      icon: FaTrophy,
      title: "Codefusion Hackathon",
      description:
        "Participated in a 24-hour Codefusion hackathon, building a working prototype under strict time constraints.",
      category: "competition",
      colorClass: "achievement-gold"
    },
    {
      icon: FaCode,
      title: "TCS CodeVita",
      description:
        "Cleared the first round of TCS CodeVita 2024, solving algorithmic problems efficiently in a competitive environment.",
      category: "competition",
      colorClass: "achievement-purple"
    },
    {
      icon: FaCertificate,
      title: "Java Programming – NPTEL",
      description:
        "Completed NPTEL Java Programming certification, strengthening object‑oriented design and core Java concepts.",
      category: "certification",
      colorClass: "achievement-blue"
    },
    {
      icon: FaCertificate,
      title: "Python Programming – Infosys Springboard",
      description:
        "Earned Python Programming certification from Infosys Springboard, gaining hands‑on experience with Python for development.",
      category: "certification",
      colorClass: "achievement-teal"
    },
    {
      icon: FaCertificate,
      title: "Software Engineer – HackerRank",
      description:
        "Achieved HackerRank Software Engineer certification, validating problem‑solving and full‑stack engineering skills.",
      category: "certification",
      colorClass: "achievement-green"
    },
    {
      icon: FaCertificate,
      title: "Introduction to CyberSecurity",
      description:
        "Completed 'Introduction to CyberSecurity' certification covering network security fundamentals, common threats, and basic defense strategies.",
      category: "certification",
      colorClass: "achievement-blue"
    },
    {
      icon: FaCertificate,
      title: "CyberSecurity Essentials",
      description:
        "Earned 'CyberSecurity Essentials' certification focusing on security best practices, risk management, and incident response basics.",
      category: "certification",
      colorClass: "achievement-teal"
    },
    {
      icon: FaCertificate,
      title: "Cyber Threat Management",
      description:
        "Certified in 'Cyber Threat Management' covering threat detection, mitigation techniques, and fundamentals of security operations.",
      category: "certification",
      colorClass: "achievement-purple"
    },
    {
      icon: FaUsers,
      title: "Technical Competitions",
      description:
        "Participated in multiple technical competitions, improving teamwork, analytical thinking, and presentation skills.",
      category: "competition",
      colorClass: "achievement-orange"
    }
  ];

  return (
    <Container fluid className="achievements-section py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center mb-5">
          <h2 className="achievements-title">Achievements</h2>
          <p className="achievements-subtitle">
            Certifications, hackathons, and coding contests that shaped my growth as a developer.
          </p>
        </Col>
      </Row>

      <Row className="g-4 justify-content-center">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <Col xs={12} md={6} lg={4} key={index}>
              <div className={`achievement-card ${achievement.colorClass}`}>
                <div className="achievement-header">
                  <div className="achievement-icon-wrapper">
                    <Icon className="achievement-icon-main" />
                  </div>
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <span className="achievement-pill">
                    {achievement.category === "competition"
                      ? "Competition"
                      : "Certification"}
                  </span>
                </div>
                <p className="achievement-description">
                  {achievement.description}
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Achievements;
