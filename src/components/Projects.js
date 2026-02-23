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
      description: "A luxury floral boutique website with online ordering, custom arrangements, and an elegant editorial look.",
      imgUrl: projImg1,
      featured: true,
      year: "2024",
      tags: ["E-COMMERCE", "UI DESIGN", "RESPONSIVE"],
      link: "#",
      number: 1,
    },
    {
      title: "FKPark",
      description: "Design & Development for a modern startup with clean interfaces and responsive layouts.",
      imgUrl: projImg2,
      year: "2024",
      tags: ["WEB APP", "UI DESIGN"],
      link: "#",
      number: 2,
    },
    {
      title: "NilamFYP",
      description: "A minimal portfolio theme with dark mode and smooth animations.",
      imgUrl: projImg3,
      year: "2023",
      tags: ["RESPONSIVE", "FRONTEND"],
      link: "#",
      number: 3,
    },
    {
      title: "Supervisor Hunting System",
      description: "Full-stack e-commerce solution with cart, checkout, and admin dashboard.",
      imgUrl: projImg1,
      year: "2023",
      tags: ["E-COMMERCE", "FULL-STACK"],
      link: "#",
      number: 4,
    },
    {
      title: "Workshop Management System",
      description: "Mobile-first UI design with intuitive navigation and accessibility in mind.",
      imgUrl: projImg2,
      year: "2023",
      tags: ["UI DESIGN", "MOBILE"],
      link: "#",
      number: 5,
    },
    {
      title: "Dashboard Analytics",
      description: "Analytics dashboard with charts, filters, and real-time data visualization.",
      imgUrl: projImg3,
      year: "2024",
      tags: ["DATA VIZ", "RESPONSIVE"],
      link: "#",
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
