import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
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

// Map of path to page title
const pageTitles = {
  '/': 'Accueil',
  '/expertise': 'Notre expertise',
  '/solutions': 'Solutions IA',
  '/cas-usage': 'Cas d’usage',
  '/projets': 'Projets R&D',
  '/investir': 'Pourquoi investir',
  '/vision': 'Notre vision IA',
  '/blogs': 'Blogs',
  '/demo': 'Demo',
  '/contact': 'Contact',
};

function Navbar({ isMenuOpen, toggleMenu, closeMenu }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentPageTitle = pageTitles[currentPath] || '';

  return (
    <nav className="bg-black text-white p-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo and Page Title */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1">
          
        <span className="text-sm text-gray-400 md:hidden">{currentPageTitle}</span>

        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </div>

        {/* Nav Links */}
        <div className={`flex flex-col md:flex-row justify-center md:justify-end gap-4 md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          {Object.entries(pageTitles).map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `${isActive ? 'text-blue-500' : 'hover:text-gray-400'} text-lg font-medium whitespace-nowrap transition-colors`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />

        {/* Main Content */}
        <div className="bg-white text-black pt-0">
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
        <footer className="bg-black text-white p-6 mt-10">
          <div className="max-w-6xl mx-auto text-center">
            
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
              <p>&copy; 2025 Votre Entreprise - Tous droits réservés</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
