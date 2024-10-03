import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import portfolio from "../../Assets/Projects/portfolioak.png";
//import jsomBlog from "../../Assets/Projects/jsomBlog.png";
import todoapp from "../../Assets/Projects/todoapp.png";
//import aF from "../../Assets/Projects/artisteeF.png";
//import aA from "../../Assets/Projects/artisteeA.png";
import easyCode from "../../Assets/Projects/fruit-ai.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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
              imgPath={todoapp}
              isBlog={false}
              title="Todo App"
              description="Developed a dynamic Todo App using HTML, CSS, and JavaScript, featuring a user-friendly interface, task management functionality, and local storage for data persistence, demonstrating understanding of front-end development principles and best practices."
              link="https://github.com/Alok77659/todoApp"
              liveLink="https://aloktodoapp.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="Fruit.ai"
              description="Fruitai is an AI-powered chatbot that helps users discover and learn about fruits. It offers personalized recommendations based on preferences, provides nutritional information, and uses natural language processing to answer queries. The goal is to promote healthy eating in a fun, interactive way. Future features include recipes, fruit pairings, and integration with health platforms."

              link="https://github.com/Alok77659/fruit-ai"
              liveLink="https://fruit-ai1.vercel.app"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Welcome to the portfolio of Alok Kumar, a passionate programmer with expertise in C++, JavaScript, and Java. Alok is focused on building web technologies, developing applications, and exploring cloud-related areas. He enjoys creating products using Node.js and modern JavaScript frameworks like React.js and Next.js. The portfolio encourages users to connect and explore Alok's projects and skills."
              link="https://github.com/Alok77659/portfolio1"
              liveLink="https://portfolio1app.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
