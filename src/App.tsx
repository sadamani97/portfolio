import { SmoothScroll, CustomCursor } from './components/animations/GlobalEffects';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-darkBg text-white overflow-x-hidden">
        <CustomCursor />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

export default App;
