import {
  CodeSlash,
  FileCode,
  Palette,
  Terminal,
  Lightning,
  Grid,
  Display,
  Phone,
  Bug,
  HddStack,
  Search,
  Server,
  Github,
  Cloud,
  Image,
} from 'react-bootstrap-icons';
import colorSharp from "../assets/img/color-sharp.png";

const SKILLS = [
  { name: 'Java', icon: CodeSlash },
  { name: 'JavaScript', icon: CodeSlash },
  { name: 'HTML5', icon: FileCode },
  { name: 'CSS3', icon: Palette },
  { name: 'SQL', icon: Terminal },
  { name: 'Python', icon: Terminal },
  { name: 'React.js', icon: Lightning },
  { name: 'Laravel', icon: Server },
  { name: 'Bootstrap', icon: Grid },
  { name: 'Responsive Web Design', icon: Display },
  { name: 'Mobile apps', icon: Phone },
  { name: 'Software Testing / Software Quality Assurance', icon: Bug },
  { name: 'MySQL', icon: HddStack },
  { name: 'Database Design', icon: HddStack },
  { name: 'SQL Queries', icon: Search },
  { name: 'Database Management Systems (DBMS)', icon: Server },
  { name: 'GitHub', icon: Github },
  { name: 'Visual Studio Code', icon: CodeSlash },
  { name: 'XAMPP', icon: Server },
  { name: 'Figma', icon: Image },
  { name: 'Firebase', icon: Cloud },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2 className="skill-title-cute">Technical Skills & Technologies <span className="skill-cat" aria-hidden="true">🐱</span></h2>
              <p className="skill-subtitle">
                Technologies and tools I use for development, design, and delivery.
              </p>
              <div className="skill-grid">
                {SKILLS.map(({ name, icon: Icon }, index) => (
                  <div
                    key={index}
                    className={`skill-item skill-item--${index % 5}`}
                    style={{ animationDelay: `${index * 0.04}s` }}
                  >
                    <span className="skill-item-icon">
                      <Icon size={28} />
                    </span>
                    <span className="skill-item-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
