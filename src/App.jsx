
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import ProjectsGallery from "./pages/ProjectsGallery"
import Hero from './components/hero';

function App() {
  return (
    <Router>
    <Header />
    <Hero/>
    {/* Wrap Route elements in a Routes component */}
    <main className='container'>

    <Routes>
      {/* Define routes using the Route component to render different page components at different paths */}
      {/* Define a default route that will render the Home component */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projectsgallery" element={<ProjectsGallery />} />
      {/* Define a route that will have descendant routes */}
    </Routes>
    </main>
    <Footer/>
  </Router>
  )
}

export default App;
