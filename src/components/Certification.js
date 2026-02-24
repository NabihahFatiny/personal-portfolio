import { Container, Row, Col } from "react-bootstrap";
import { Palette, Eye } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const CARD_COLORS = ["blue", "green", "purple", "pink", "orange", "teal", "indigo", "coral", "mint"];

const CERTIFICATIONS = [
  { title: "Google UX Design Certificate", issuer: "Google via Coursera", status: "COMPLETED", link: "" },
  { title: "Certification name", issuer: "Issuer / Platform", status: "COMPLETED", link: "" },
  { title: "Certification name", issuer: "Issuer / Platform", status: "COMPLETED", link: "" },
  { title: "Certification name", issuer: "Issuer / Platform", status: "COMPLETED", link: "" },
  { title: "Certification name", issuer: "Issuer / Platform", status: "COMPLETED", link: "" },
  { title: "Certification name", issuer: "Issuer / Platform", status: "COMPLETED", link: "" },
  { title: "Certification name", issuer: "Issuer / Platform", status: "COMPLETED", link: "" },
  { title: "Certification name", issuer: "Issuer / Platform", status: "COMPLETED", link: "" },
  { title: "Certification name", issuer: "Issuer / Platform", status: "COMPLETED", link: "" },
];

export const Certification = () => {
  return (
    <section className="certification" id="certification">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <header className="certification-header">
                <h2 className="certification-title-wrap">
                  <span className="certification-title-bold">Certifications &</span>
                  <span className="certification-title-italic">Appreciation</span>
                </h2>
                <p className="certification-subtitle">
                  A curated record of professional achievements, recognized credentials, and appreciation.
                </p>
              </header>

              <Row className="certification-cards-row">
                {CERTIFICATIONS.map((item, index) => {
                  const color = CARD_COLORS[index % CARD_COLORS.length];
                  return (
                  <Col key={index} xs={12} sm={6} lg={4} className="certification-card-col">
                    <article className={`certification-card certification-card--${color}`}>
                      <div className="certification-card-top">
                        <div className="certification-card-icon-wrap">
                          <Palette size={26} className="certification-card-icon" />
                        </div>
                        <div className="certification-card-head">
                          <h3 className="certification-card-title">{item.title}</h3>
                          <p className="certification-card-issuer">{item.issuer}</p>
                        </div>
                      </div>
                      <span className="certification-card-status">{item.status}</span>
                      <a
                        href={item.link || "#"}
                        target={item.link ? "_blank" : undefined}
                        rel={item.link ? "noopener noreferrer" : undefined}
                        className="certification-card-btn"
                      >
                        <Eye size={18} /> View Certificate
                      </a>
                    </article>
                  </Col>
                  );
                })}
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
