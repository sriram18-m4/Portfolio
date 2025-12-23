import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Aspiring Software Engineer who enjoys turning ideas into 
              reliable, scalable applications. As a fresher, has built projects
              across the full stack and explored different technologies, which sparked
              a strong interest in clean and intuitive user interfaces.
              Looking for an opportunity to learn from experienced teams, write 
              production‑quality code, and contribute to impactful products while growing as a developer.​
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java,HTML,CSS,Javascript,Node.js,Express.js and SQL{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Creative Solutions,{" "}
                </b>
              </i>
              and exploring new ways to implement modern solutions.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
