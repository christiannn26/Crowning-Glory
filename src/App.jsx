import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Location from './components/Location';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Location />

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} <span>Crowning Glory</span> — All
          Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default App;
