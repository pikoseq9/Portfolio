import "./styles.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import { ProjectsProvider } from "./Context/ProjectsProvider";
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";

function App() {

  const { language } = useContext(LanguageContext);
  
  return (
    <div className="App">
      
      <div className="app-container">
        <ParticleBackground />
        <div className="app-content">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<About />} />
              <Route
                path="/projects"
                element={
                  <ProjectsProvider>
                    <Projects />
                  </ProjectsProvider>
                }
              />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
