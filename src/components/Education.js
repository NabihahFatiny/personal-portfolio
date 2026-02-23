import { Container } from "react-bootstrap";

const TIMELINE_YEARS = [2021, 2022, 2023, 2024, 2025, 2026];

const EDUCATION = [
  {
    degree: "Diploma in Computer Science",
    institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
    startYear: 2021,
    endYear: 2023,
    barColor: "bar-blue",
    present: false,
  },
  {
    degree: "Bachelor of Computer Science (Software Engineering) with Honors",
    institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
    startYear: 2023,
    endYear: 2026,
    barColor: "bar-pink",
    present: true,
  },
];

const getBarStyle = (startYear, endYear) => {
  const min = 2021;
  const max = 2026;
  const left = ((startYear - min) / (max - min)) * 100;
  const width = ((endYear - startYear) / (max - min)) * 100;
  return { left: `${left}%`, width: `${width}%` };
};

export const Education = () => {
  return (
    <section className="education education-timeline" id="education">
      <div className="education-timeline-bg" aria-hidden="true" />
      <Container>
        <header className="education-header">
          <h2 className="education-title-cute">Education Timeline <span className="education-cat" aria-hidden="true">🐱</span></h2>
          <p className="education-subtitle">Academic journey at a glance.</p>
        </header>

        <div className="education-timeline-track">
          <div className="education-timeline-line" />
          <div className="education-timeline-years">
            {TIMELINE_YEARS.map((year) => (
              <span key={year} className="education-timeline-year">{year}</span>
            ))}
          </div>
        </div>

        <div className="education-entries">
          {EDUCATION.map((item, index) => (
            <article key={index} className="education-entry" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="education-entry-info">
                <h3 className="education-entry-degree">{item.degree}</h3>
                <p className="education-entry-institution">{item.institution}</p>
              </div>
              <div className="education-timeline-bar-wrap">
                <div
                  className={`education-timeline-bar education-timeline-bar--${item.barColor}`}
                  style={getBarStyle(item.startYear, item.endYear)}
                  title={`${item.startYear} – ${item.endYear}`}
                >
                  <span className="education-timeline-bar-label">{item.startYear} – {item.present ? "Present" : item.endYear}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
