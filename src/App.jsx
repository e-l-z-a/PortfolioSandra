import { useState } from "react";
import "./App.css";
import PillNav from "./components/PillNav";
import StarBorder from "./components/StarBorder";
import Carousel from "./components/Carousel";
import ProjCarousel from "./components/ProjectCarousel";
import DownloadButton from "./components/DownloadButton";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleNavClick = (href) => {
    const id = href.replace("#", "");
    
    if (window.innerWidth <= 768) {  
      // mobile → scroll instead of expand  
      const el = document.getElementById(id);  
      if (el) el.scrollIntoView({ behavior: "smooth" });  
    } else {  
      // desktop → expand clicked section  
      setActiveSection(activeSection === id ? null : id);  
    }
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <PillNav
          items={[
            
            { label: "WhoAmI", href: "#profile-description" }
          ]}
          activeHref={activeSection ? `#${activeSection}` : "/"}
          onItemClick={handleNavClick}
        />
      </nav>

      {/* Grid Layout */}  
      <div className={`layout ${activeSection ? "expanded" : ""}`} style={{paddingTop:'80px'}}>
        {/* Left Side - Divided into 2 columns with 4 sections */}
        <div className="left-grid">
          

          <section
            id="profile-description"
            className={`desc-section ${activeSection === "profile-description" ? "active" : ""}`}
          >
            
            <p>
              Hello! I’m a Software Engineer with a background in <span class="highlight">Computer Science</span> (GPA: 8.27) and hands-on experience
              across application development, business intelligence, and data reporting.
              I have worked with <span class="highlight">.NET, SQL Server, and Azure</span> to build and support scalable applications, while also developing 
              SSIS/SSRS-based reporting solutions to deliver reliable business insights. My experience includes <span class="highlight">writing optimized SQL queries, 
              validating data accuracy, supporting ETL workflows, troubleshooting production issues, and collaborating with stakeholders during 
              UAT and testing phases.</span>
            </p>
              I enjoy solving problems from both a technical and analytical perspective — whether that means developing features, 
              improving data quality, or optimizing reporting processes. I’m continuously learning and looking for opportunities where I can 
              contribute across development, data, and support functions.
              <br />
              Let’s connect and build impactful solutions.
          </section>

          <section
            id="profile-card"
            className={`card-section ${activeSection === "profile-card" ? "active" : ""}`}
          >
            <StarBorder as="div" color="#F1EADA" speed="6s">
              <div className="profile-content">
                <div className="profile-image">
                  
                 
                </div>
                <h2>Sandra Leo</h2>
                <p>.NET Developer</p>
                <div className="button-spacer"></div>
                <DownloadButton />
              </div>
            </StarBorder>
          </section>

          <section
            id="skill-section"
            className={`skill-section ${activeSection === "skill-section" ? "active" : ""}`}
          >
            <h2>TechSkills</h2>
            <Carousel 
                    
                    baseWidth={300}
                    fullWidth={true} 
                    autoplay={true}
                    pauseOnHover={true}
                    loop={true}
                  />
          </section>

          <section
                    id="contact-section"
                    className={`contact-section ${activeSection === "contact-section" ? "active" : ""}`}
                  >
                  <h2>GetInTouch</h2>
          <div className="contact-container">
            <div className="contact-item">
              <a 
                href="sandraelizabethlk@gmail.com" 
                className="contact-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com', '_blank');
                }}
              >
               <u> sandraelizabethlk@gmail.com  </u>
              </a>
              <span className="contact-label">📧Email</span>
            </div>

            <div className="contact-item">
              <a 
                href="https://www.linkedin.com/in/sandra-leo-67aba8187/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <u>sandra-leo</u>
              </a>
              <span className="contact-label">💼LinkedIn</span>
            </div>

          </div>
          </section>
        </div>

        {/* Right Side - Single large project section */}
        <div className="right-column">
          <section
            id="project-section"
            className={activeSection === "project-section" ? "active" : ""}
          >
            <h2>PersonalProjects</h2>
           <ProjCarousel  />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
 {/* copyright-sandra Leo -* Sept2025*/}
