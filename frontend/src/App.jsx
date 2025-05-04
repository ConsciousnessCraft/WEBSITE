import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Accueil from './pages/Accueil';
import Expertise from './pages/Expertise';
import SolutionsIA from './pages/SolutionsIA';
import CasUsage from './pages/CasUsage';
import ProjetsRD from './pages/ProjetsRD';
import PourquoiInvestir from './pages/PourquoiInvestir';
import VisionIA from './pages/VisionIA';
import Blogs from './pages/Blogs';
import Demo from './pages/Demo/Demo';
import Contact from './pages/Contact';
import { Linkedin, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        {/* Navbar */}
        <nav className="bg-gray-900 text-white p-6 sticky top-0 z-10">
        <NavLink to="/" className="text-3xl font-extrabold text-white">Logo</NavLink>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Left side: Logo */}
            

            {/* Right side: Hamburger & Links */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Icon */}
              <div className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </div>

              {/* Navigation Links */}
              <div className={`absolute top-full left-0 w-full md:static md:flex md:items-center md:gap-6 bg-gray-900 p-4 md:p-0 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 text-lg font-medium" : "text-lg font-medium hover:text-gray-400"}>Accueil</NavLink>
                <NavLink to="/expertise" className={({ isActive }) => isActive ? "text-blue-500 text-lg font-medium whitespace-nowrap" : "text-lg font-medium hover:text-gray-400 whitespace-nowrap"}>Notre expertise</NavLink>
                <NavLink to="/solutions" className={({ isActive }) => isActive ? "text-blue-500 text-lg font-medium whitespace-nowrap" : "text-lg font-medium hover:text-gray-400 whitespace-nowrap"}>Solutions IA</NavLink>
                <NavLink to="/cas-usage" className={({ isActive }) => isActive ? "text-blue-500 text-lg font-medium whitespace-nowrap" : "text-lg font-medium hover:text-gray-400 whitespace-nowrap"}>Cas d’usage</NavLink>
                <NavLink to="/projets" className={({ isActive }) => isActive ? "text-blue-500 text-lg font-medium whitespace-nowrap" : "text-lg font-medium hover:text-gray-400 whitespace-nowrap"}>Projets R&D</NavLink>
                <NavLink to="/investir" className={({ isActive }) => isActive ? "text-blue-500 text-lg font-medium whitespace-nowrap" : "text-lg font-medium hover:text-gray-400 whitespace-nowrap"}>Pourquoi investir</NavLink>
                <NavLink to="/vision" className={({ isActive }) => isActive ? "text-blue-500 text-lg font-medium whitespace-nowrap" : "text-lg font-medium hover:text-gray-400 whitespace-nowrap"}>Notre vision IA</NavLink>
                <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-blue-500 text-lg font-medium" : "text-lg font-medium hover:text-gray-400"}>Blogs</NavLink>
                <NavLink to="/demo" className={({ isActive }) => isActive ? "text-blue-500 text-lg font-medium" : "text-lg font-medium hover:text-gray-400"}>Demo</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500 text-lg font-medium" : "text-lg font-medium hover:text-gray-400"}>Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="bg-white text-black">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/solutions" element={<SolutionsIA />} />
            <Route path="/cas-usage" element={<CasUsage />} />
            <Route path="/projets" element={<ProjetsRD />} />
            <Route path="/investir" element={<PourquoiInvestir />} />
            <Route path="/vision" element={<VisionIA />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 mt-10">
          <div className="max-w-6xl mx-auto text-center">
            <p>&copy; 2025 Votre Entreprise - Tous droits réservés</p>
            <div className="flex justify-center gap-8 mt-4">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="tel:+33123456789" className="hover:text-gray-400 transition-colors">
                <Phone className="h-6 w-6" />
              </a>
              <a href="mailto:contact@votreentreprise.com" className="hover:text-gray-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://www.google.com/maps?q=10+Rue+de+l'Innovation+Paris+France" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <MapPin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4 text-sm">
              <p>10 Rue de l'Innovation, Paris, France</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
