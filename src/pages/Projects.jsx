import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import FYP from '../assets/projects/FYP.gif'
import InstagramClone from '../assets/projects/InstagramClone.gif'
import SortSprint from '../assets/projects/SortSprint.gif'
import WEBSTORE from '../assets/projects/WEBSTORE.gif'
import AvatarVerse from "../assets/projects/Avatar Verse.gif"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="Project Heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={6} md={4} className="tech-icons">
            <ProjectCard
              URL ="https://github.com/hafabdulsami/avatarVerse"
              className = "ProjectCard"
              imgPath={AvatarVerse}
              isBlog={false}
              title="Global Search"
              description="The project is designed to enable users to search and locate people globally by displaying their location on a digital globe with an animated pin. The project's success lies in its ability to provide real-time and accurate location data, thus revolutionizing the way people interact and communicate worldwide. The ability to track individuals' location has become an integral feature of many applications worldwide, allowing users to stay connected and informed. With this project, users can easily track individuals' location and visualize their movements on a digital map, making it a powerful tool for various industries, including security, travel, and social networking. This project has paved the way for new possibilities in the global communication and location tracking industry."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col xs={6} md={4} className="tech-icons">
            <ProjectCard
              URL = "https://github.com/hafabdulsami/sorting-project-react-js-"
              imgPath={SortSprint}
              isBlog={false}
              title="DSA MidProject"
              description="This project developed a ReactJS website that implemented various sorting algorithms such as bubble sort, merge sort, quick sort, and insertion sort. The website allowed users to input data and observe the sorting process while comparing time complexities based on the size of the input data. The main objective of this project was to educate users on the importance of algorithmic efficiency in practical applications. By showcasing the practical applications of sorting algorithms, the project emphasized their impact on real-world scenarios. This project aimed to provide a platform for users to understand and appreciate the significance of sorting algorithms in solving real-world problems."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col xs={6} md={4} className="tech-icons">
            <ProjectCard
              URL = "https://github.com/hafabdulsami/instagram"
              imgPath={InstagramClone}
              isBlog={false}
              title="FYP Management System"
              description="The project involved the development of a desktop-based application that utilized SQL for efficient management of student records, faculty information, course details, and attendance tracking for a department. This console-based application provided an intuitive and user-friendly interface, which streamlined data management for department staff. Through this project, the practical applications of database management were showcased, emphasizing its significance in real-world scenarios. By utilizing SQL for data storage, retrieval, and manipulation, the project highlighted the numerous benefits of database management in the modern era, such as improved data security, easy data access, and efficient data manipulation."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>

          <Col xs={6} md={4} className="tech-icons">
            <ProjectCard
              URL = "https://github.com/hafabdulsami/WebStore"
              imgPath={WEBSTORE}
              isBlog={false}
              title="Endless Runner"
              description="project involved developing a game called Endless Runner on the Unity game engine. The project enabled him to learn various basic techniques of game development, such as designing game levels, creating game objects, implementing game mechanics, and integrating sound effects. The Endless Runner game had a simple objective of running as far as possible without colliding with obstacles, and the game difficulty increased as the player progressed. The project allowed Abdul Sami to gain hands-on experience in game development and paved the way for further exploration of the game development field."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col xs={6} md={4} className="tech-icons">
            <ProjectCard
              URL = "https://github.com/hafabdulsami/FYP-Management-System"
              imgPath={FYP}
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