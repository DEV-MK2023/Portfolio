// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
 <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
</div>

     

    
    </>
  );
}

export default App;
