import { Container, Row, Col } from "react-bootstrap";
import { Award, Eye } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const CARD_COLORS = ["blue", "green", "purple", "pink", "orange", "teal", "indigo", "coral", "mint"];

const CERTIFICATIONS = [
  { title: "Majlis Kecemerlangan Anugerah Lonjakan Paradigma", issuer: "UMPSA / MDEC", status: "COMPLETED", link: (process.env.PUBLIC_URL || "") + "/anugerah-lonjakan-paradigma.png" },
  { title: "EF SET English Certification", issuer: "EF Standard English Test", status: "COMPLETED", link: (process.env.PUBLIC_URL || "") + "/ef-set-english-certification.pdf" },
  { title: "Certificate Aptitude Test UMP", issuer: "Universiti Malaysia Pahang", status: "COMPLETED", link: (process.env.PUBLIC_URL || "") + "/sijil-aptitude-test-ump-august-2023.pdf" },
  { title: "Mathematics Screening Test", issuer: "Universiti Malaysia Pahang", status: "COMPLETED", link: (process.env.PUBLIC_URL || "") + "/mathematics-screening-test.pdf" },
  { title: "Edit Like a Pro with Canva", issuer: "Canva", status: "COMPLETED", link: (process.env.PUBLIC_URL || "") + "/edit-like-a-pro-with-canva.pdf" },
  { title: "Certificate Click Wisely & Social Media Ethics", issuer: "UMPSA", status: "COMPLETED", link: (process.env.PUBLIC_URL || "") + "/sijil-click-wisely-social-media-ethics.pdf" },
  { title: "Certificate Pengurusan Majlis", issuer: "UMPSA", status: "COMPLETED", link: (process.env.PUBLIC_URL || "") + "/sijil-pengurusan-majlis.pdf" },
  { title: "Certificate Digital Citizenship", issuer: "UMPSA", status: "COMPLETED", link: (process.env.PUBLIC_URL || "") + "/sijil-digital-citizenship.pdf" },
  { title: "Certificate Townhall Akademi ADAB - Co-Curriculum", issuer: "UMPSA / Akademi ADAB", status: "COMPLETED", link: (process.env.PUBLIC_URL || "") + "/certificate-townhall-akademi-adab-co-curriculum.pdf" },
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
                  Highlights my involvement in university activities, workshops, and programs that contributed to my academic growth and personal development.
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
                          <Award size={26} className="certification-card-icon" />
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
