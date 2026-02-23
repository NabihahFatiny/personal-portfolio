import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Fatiny.jpg";
import { ArrowRightCircle, Github, Linkedin, CodeSlash, Download } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Computer Science", "Software Engineering Student", "Final Year" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <div className="banner-cat-decor" aria-hidden="true">
        <span className="cat-float cat-float--1">🐱</span>
        <span className="cat-float cat-float--2">🐾</span>
        <span className="cat-float cat-float--3">🐾</span>
        <span className="cat-float cat-float--4">🐱</span>
      </div>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline tagline-cute">Welcome to my Portfolio everyone!<span className="cat-inline">🐱</span></span>
                <h1>{`Hi! My name is Fatiny :)`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Computer Science", "Software Engineering Student", "Final Year" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a final-year Computer Science (Software Engineering) student at Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA) passionate about web development and design. I enjoy creating responsive and visually appealing websites using modern technologies. I am currently looking for an internship to 
                    gain real-world experience and further develop my skills as a developer.</p>
                <a href="#connect" className="banner-connect-link" onClick={(e) => { e.preventDefault(); window.open("https://www.linkedin.com/in/nabihahfatiny", "_blank"); }}>
                  Let’s Connect <ArrowRightCircle size={34} className="banner-connect-arrow" />
                </a>
                <div className="banner-cta">
                  <a href="#projects" className="banner-btn banner-btn-primary">
                    <CodeSlash size={26} /> View Projects
                  </a>
                  <a href="#connect" className="banner-btn banner-btn-contact">
                    Contact Me
                  </a>
                  <a href="/cv.pdf" download className="banner-btn banner-btn-cv">
                    <Download size={26} /> Download CV
                  </a>
                </div>
                <div className="banner-stats">
                  <div className="banner-stat">
                    <span className="banner-stat-value">4+</span>
                    <span className="banner-stat-label">YEARS</span>
                  </div>
                  <div className="banner-stat">
                    <span className="banner-stat-value">15+</span>
                    <span className="banner-stat-label">PROJECTS</span>
                  </div>
                  <div className="banner-stat">
                    <span className="banner-stat-value">Web Dev • UI/UX</span>
                    <span className="banner-stat-label">INTERESTS</span>
                  </div>
                </div>
                <div className="banner-social">
                  <a href="https://github.com/nabihahfatiny" target="_blank" rel="noopener noreferrer" className="banner-social-icon" aria-label="GitHub">
                    <Github size={26} />
                  </a>
                  <a href="https://www.linkedin.com/in/nabihahfatiny" target="_blank" rel="noopener noreferrer" className="banner-social-icon" aria-label="LinkedIn">
                    <Linkedin size={30} />
                  </a>
                  
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`banner-image-wrap ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
                  <img src={headerImg} alt="Fatiny" className="banner-img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
