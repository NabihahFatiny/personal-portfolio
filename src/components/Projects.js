import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
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
      tags: ["E-COMMERCE", "UI DESIGN", "RESPONSIVE"],
      link: "#",
      github: "https://github.com/NabihahFatiny/ClassConnect",
      number: 1,
    },
    {
      title: "FKPark",
      description: "FKPark is a web-based Car Parking Management System, featuring vehicle registration, parking slot booking, QR code-based access control, and traffic summons.",
      imgUrl: (process.env.PUBLIC_URL || "") + "/fkpark-login.png",
      year: "2024",
      tags: ["WEB APP", "UI DESIGN"],
      link: "#",
      github: "https://github.com/NabihahFatiny/FKPark",
      number: 2,
    },
    {
      title: "NilamFYP",
      description: "A digital platform to help students record and monitor their NILAM reading activities. Students can add books they have read, write book summaries, and submit ratings.",
      imgUrl: (process.env.PUBLIC_URL || "") + "/nilamfyp-login.png",
      year: "2023",
      tags: ["RESPONSIVE", "FRONTEND"],
      link: "#",
      github: "https://github.com/NabihahFatiny/nilamfyp",
      number: 3,
    },
    {
      title: "Food Ordering System",
      description: "Food Ordering System is a web-based platform designed to help restaurants and customers manage food orders, menus, and delivery in one centralized system.",
      imgUrl: (process.env.PUBLIC_URL || "") + "/food-ordering.png",
      year: "2023",
      tags: ["E-COMMERCE", "FULL-STACK"],
      link: "#",
      github: "https://github.com/NabihahFatiny/foodsystem",
      number: 4,
    },
    {
      title: "Workshop Management System",
      description: "The Workshop Management System is an application to help workshop owners to manage inventory, schedules, and employee payroll in one platform.",
      imgUrl: (process.env.PUBLIC_URL || "") + "/workshop-management.png",
      year: "2023",
      tags: ["UI DESIGN", "MOBILE"],
      link: "#",
      github: "https://github.com/NabihahFatiny/Workshop-Management-System",
      number: 5,
    },
    {
      title: "Portfolio",
      description: "This portfolio site built with React—responsive layout, project showcase, and contact section.",
      imgUrl: projImg3,
      year: "2024",
      tags: ["REACT", "RESPONSIVE"],
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Row className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
