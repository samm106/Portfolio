import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import devchat from "../../Assets/Projects/devchat.png";
import natours from "../../Assets/Projects/natours.png";
import crown  from "../../Assets/Projects/crown clothing.png";
import covid from "../../Assets/Projects/covid test.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={natours}
              isBlog={false}
              title="Natours"
              description="A tour guide project to help you
              pick adventurous tours or become a guide yourself."
              ghLink="https://github.com/samm106/natours"
              demoLink="https://www.natours.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crown}
              isBlog={false}
              title="Crown Clothing"
              description="An E-commerce
              website to find your favorite styles in clothing."
              ghLink="https://github.com/samm106/crown-clothing"
              demoLink="https://crown-clothing-shop.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devchat}
              isBlog={false}
              title="DevChat"
              description="A social media app to connect with more
              developers."
              ghLink="https://github.com/samm106"
              demoLink="https://react-slack-clone-d6022.firebaseapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 Detection AI"
              description="Research oriented, open source, covid-19 detection web
              app to analyze whether patient is affected with covid or not"
              ghLink="https://github.com/samm106"
              demoLink="https://www.kaggle.com/code/sameersaxena844/viral-pneumonia-classification-googlenet/no"
            />
          </Col>

  

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
