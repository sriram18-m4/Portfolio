import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Buddharaju Sri Ram Varma</span>{" "}
            from <span className="purple">Kakinada, India</span>.
            <br />
            I am currently a final-year B.Tech student in Computer Science at Vignan's Lara Institute of Technology and Science.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton 🏸
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sri Ram Varma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
