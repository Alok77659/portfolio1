import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Alok_Kumar.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Full Stack developer [Shree Themes]"
              date="April 2021 - present"
              content={[
                "Learned and experiment with React Native, Aws cloud services like S3, Amplify, App Sync, RDS, GraphQl and DynamoDb.",
                "Build Full Social media and tinder type Application for LGBTQ+ people.",
              ]}
            />
            <Resumecontent
              title="Full Stack developer [Zujo]"
              date="June 2020 - April 2021"
              content={[
                "Learned and experiment with Aws cloud services like S3, EC2, DynamoDb with Typescript, Nodejs, Graphql, as a backend technology and React, RelayJs, Material UI and Next.js as a frontend technology.",
                "Build Full Online Learning Plateform which has servel feature like live streaming with real time chat, uploading courses, videos, track watch time etc.",
              ]}
            
           
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering [Chitkara University] "
              date="2021 - 2025"
              content={[
                `CGPA: 8.15/10 `,
                " I am pursuing my bachelor's degree in Computer Science Engineering at Chitkara University..",
              ]}
            />

            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Core member at CU-ARCS (Sports Club)`,
                ` Solved questions on Geeks for Geeks`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
