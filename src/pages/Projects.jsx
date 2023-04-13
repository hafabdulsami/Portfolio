import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="Project Heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Global Search"
              description=" project enables users to search for people globally and visualize their location on a digital globe through an animation with a pin. The project's success hinges on its ability to provide accurate and real-time location data, revolutionizing the way people interact and communicate worldwide. This feature has become a vital component of various applications worldwide, allowing users to track individuals' location and stay connected and informed."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="DSA MidProject"
              description="This project created a ReactJS website to implement sorting algorithms like bubble sort, merge sort, quick sort, and insertion sort. Users can input data and visualize the sorting process and compare time complexities based on input data size. The project aimed to educate users on the significance of algorithmic efficiency in practical applications. By demonstrating the practical applications of sorting algorithms, the project highlighted their impact on real-world scenarios."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="FYP Management System"
              description="The project created a desktop-based application that utilized SQL for efficient database management of a department's student records, faculty information, course details, and attendance tracking. The console-based application provided an intuitive and user-friendly interface, streamlining data management for department staff. The project showcased the practical applications of database management, emphasizing its importance in real-world scenarios. By utilizing SQL for data storage, retrieval, and manipulation, the project highlighted the benefits of database management in the modern era."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Endless Runner"
              description="project involved developing a game called Endless Runner on the Unity game engine. The project enabled him to learn various basic techniques of game development, such as designing game levels, creating game objects, implementing game mechanics, and integrating sound effects. The Endless Runner game had a simple objective of running as far as possible without colliding with obstacles, and the game difficulty increased as the player progressed. The project allowed Abdul Sami to gain hands-on experience in game development and paved the way for further exploration of the game development field."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Instagram Ui Clone"
              description="project involved developing a front-end clone of the popular social media application, Instagram. The project aimed to showcase his proficiency in web development, specifically in HTML, CSS, and JavaScript. The clone's front-end design included various components of Instagram's user interface, such as the login page, profile page, news feed, and explore page. The project allowed Abdul Sami to enhance his skills in front-end web development and gave him hands-on experience in building complex web interfaces."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects