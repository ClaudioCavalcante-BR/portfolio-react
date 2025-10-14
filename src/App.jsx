import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Articles from "./sections/Articles/Articles";
import Contact from "./sections/Contact/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}