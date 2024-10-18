import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './app';
import About from './pages/about'; // Import About component
import Contact from './pages/contact'; // Import Contact component
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Your main app component */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
      </Routes>
    </BrowserRouter>
  );
};

hydrateRoot(document.getElementById('app'), <Main />); // Hydrate the Main component
