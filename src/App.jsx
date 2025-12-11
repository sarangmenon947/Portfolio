import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Internships from "./components/Internships.jsx";
import Projects from "./components/Projects";
import Academics from "./components/Academics.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import BlurBlob from './components/BlurBob';
import Volunteerships from "./components/Volunteerships.jsx";
import Certifications from "./components/Certifications.jsx";
import LeadershipSkills from "./components/LeadershipSkills.jsx";

const App = () => {
  return (
    <div className="bg-[#050414]">

       <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Volunteerships />
        <Internships />
        <Certifications />
        <Projects />
        <LeadershipSkills />
        <Academics />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
