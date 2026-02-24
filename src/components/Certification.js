import { Container, Row, Col } from "react-bootstrap";
import { Award, People } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const CERTIFICATIONS = [
  {
    title: "Your certification name",
    issuer: "Issuer / Platform",
    date: "Year",
    link: "",
  },
  // Add more: { title: "...", issuer: "...", date: "...", link: "https://..." },
];

const PARTICIPATION = [
  {
    title: "Event or program name",
    role: "Role / Type (e.g. Participant, Speaker)",
    date: "Year",
    link: "",
  },
  // Add more: { title: "...", role: "...", date: "...", link: "https://..." },
];

export const Certification = () => {
  return (
    <section className="certification" id="certification">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <header className="certification-header">
                <h2 className="certification-title-cute">
                  Certification & Participation <span className="certification-cat" aria-hidden="true">🐱</span>
                </h2>
                <p className="certification-subtitle">
                  Certificates earned and events I’ve taken part in.
                </p>
              </header>

              <Row>
                <Col xs={12} lg={6} className="certification-col">
                  <div className="certification-block">
                    <h3 className="certification-block-title">
                      <Award size={22} className="certification-block-icon" />
                      Certifications
                    </h3>
                    <ul className="certification-list">
                      {CERTIFICATIONS.map((item, index) => (
                        <li key={index} className="certification-item">
                          <div className="certification-item-content">
                            <strong className="certification-item-title">{item.title}</strong>
                            <span className="certification-item-meta">{item.issuer} · {item.date}</span>
                            {item.link && (
                              <a href={item.link} target="_blank" rel="noopener noreferrer" className="certification-item-link">
                                View certificate
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
                <Col xs={12} lg={6} className="certification-col">
                  <div className="certification-block">
                    <h3 className="certification-block-title">
                      <People size={22} className="certification-block-icon" />
                      Participation
                    </h3>
                    <ul className="certification-list">
                      {PARTICIPATION.map((item, index) => (
                        <li key={index} className="certification-item">
                          <div className="certification-item-content">
                            <strong className="certification-item-title">{item.title}</strong>
                            <span className="certification-item-meta">{item.role} · {item.date}</span>
                            {item.link && (
                              <a href={item.link} target="_blank" rel="noopener noreferrer" className="certification-item-link">
                                More info
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
