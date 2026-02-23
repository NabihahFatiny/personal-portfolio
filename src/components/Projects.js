import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Classconnect",
      description: "ClassConnect is a web-based platform designed to help teachers and students manage lessons, assignments, and communication in one centralized system. ",
      imgUrl: (process.env.PUBLIC_URL || "") + "/classconnect-login.png",
      featured: true,
      year: "2024",
      tags: ["WEB APPLICATION", "FULL STACK", "RESPONSIVE"],
      link: "#",
      github: "https://github.com/NabihahFatiny/ClassConnect",
      number: 1,
    },
    {
      title: "FKPark",
      description: "FKPark is a web-based Car Parking Management System, featuring vehicle registration, parking slot booking, QR code-based access control, and traffic summons.",
      imgUrl: (process.env.PUBLIC_URL || "") + "/fkpark-login.png",
      year: "2024",
      tags: ["WEB APPLICATION", "FULL STACK", "DATABASE"],
      link: "#",
      github: "https://github.com/NabihahFatiny/FKPark",
      number: 2,
    },
    {
      title: "NilamFYP",
      description: "A digital platform to help students record and monitor their NILAM reading activities. Students can add books they have read, write book summaries, and submit ratings.",
      imgUrl: (process.env.PUBLIC_URL || "") + "/nilamfyp-login.png",
      year: "2023",
      tags: ["WEB APPLICATION", "FULL STACK", "STUDENT SYSTEM"],
      link: "#",
      github: "https://github.com/NabihahFatiny/nilamfyp",
      number: 3,
    },
    {
      title: "Food Ordering System",
      description: "Food Ordering System is a web-based platform designed to help restaurants and customers manage food orders, menus, and delivery in one centralized system.",
      imgUrl: (process.env.PUBLIC_URL || "") + "/food-ordering.png",
      year: "2023",
      tags: ["WEB APPLICATION", "FULL STACK", "E-COMMERCE"],
      link: "#",
      github: "https://github.com/NabihahFatiny/foodsystem",
      number: 4,
    },
    {
      title: "Workshop Management System",
      description: "The Workshop Management System is an application to help workshop owners to manage inventory, schedules, and employee payroll in one platform.",
      imgUrl: (process.env.PUBLIC_URL || "") + "/workshop-management.png",
      year: "2023",
      tags: ["MOBILE APPLICATION", "FLUTTER", "FULL STACK"],
      link: "#",
      github: "https://github.com/NabihahFatiny/Workshop-Management-System",
      number: 5,
    },
    {
      title: "Portfolio",
      description: "A personal portfolio website designed to highlight my software development projects, technical skills, and experience using modern web technologies.",
      imgUrl: (process.env.PUBLIC_URL || "") + "/portfolio-card.png",
      year: "2024",
      tags: ["PORTFOLIO WEBSITE", "REACT", "RESPONSIVE"],
      link: "#",
      github: "https://github.com/NabihahFatiny/personal-portfolio",
      number: 6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My software development projects showcasing my experience in building web and mobile applications using modern technologies such as Flutter, React, and web development tools. These projects demonstrate my skills in system design, UI development, and problem solving.</p>
                <Row className={`project-cards-row ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} number={project.number ?? index + 1} />
                  ))}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
