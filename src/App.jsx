import { lazy, Suspense } from "react";
import ParticleBackground from "./components/ParticleBackground.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import TechMarquee from "./components/TechMarquee.jsx";
import ScrollAtmosphere from "./components/ScrollAtmosphere.jsx";
import ScrollSection from "./components/ScrollSection.jsx";

const About = lazy(() => import("./components/About.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Education = lazy(() => import("./components/Education.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

export default function App() {
  return (
    <div className="relative isolate min-h-screen grid-bg">
      <ScrollProgress />
      <CursorGlow />
      <ParticleBackground />
      <ScrollAtmosphere />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <Suspense fallback={null}>
          <ScrollSection index={0}><About /></ScrollSection>
          <ScrollSection index={1}><Skills /></ScrollSection>
          <ScrollSection index={2}><Experience /></ScrollSection>
          <ScrollSection index={3}><Projects /></ScrollSection>
          <ScrollSection index={4}><Education /></ScrollSection>
          <ScrollSection index={5}><Contact /></ScrollSection>
        </Suspense>
      </main>
      <div className="relative z-10">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
