import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Certification } from "./components/Certification";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <NavBar />
      <Banner />
      <Skills />
      <Education />
      <Certification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
