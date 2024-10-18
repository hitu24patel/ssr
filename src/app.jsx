import { useState } from "react";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom"; // Single import for Routes and Route
import About from "./pages/about"; // Ensure your About component is imported
import Contact from "./pages/contact"; // Ensure your Contact component is imported

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        
        <h1>App</h1>
        <p>Lorem Ipsum</p>
        <div>
          <div>{count}</div>
          <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
        <div className="relative">
          <div className="absolute right-0 top-0 z-50">
            <button variant="link" className="p-0">
              this is my name
            </button>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-3 z-50 w-fit text-center">
            <span>Active</span>
          </div>
        </div>
        <ol>
          <li>
            <strong>
              <em>Improved Performance:</em>{" "}
            </strong>
            SSR can significantly reduce the time it takes for a web page to be
            displayed to the user, especially for the initial page load.
          </li>
          <li>
            <strong>
              <em>Enhanced SEO:</em>
            </strong>{" "}
            Search engine crawlers can easily parse the HTML content sent by the
            server, making it easier for your web pages to be indexed.
          </li>
          <li>
            <strong>
              <em>Better Accessibility:</em>
            </strong>{" "}
            SSR ensures that web pages are accessible even when JavaScript is
            disabled or not fully supported.
          </li>
          <li>
            <strong>
              <em>Consistent Content:</em>
            </strong>{" "}
            Since SSR generates HTML content on the server, all users receive
            the same content, regardless of their device or browser.
          </li>
          <li>
            <strong>
              <em>Improved Time to Interactivity (TTI): </em>
            </strong>
            SSR can lead to faster Time to Interactivity, which measures the
            time it takes for a web page to become fully interactive.
          </li>
          <li>
            <strong>
              <em>Support for Social Media Crawlers:</em>
            </strong>{" "}
            Social media platforms often use web crawlers to generate previews
            of shared links.
          </li>
        </ol>
      </>
    </HelmetProvider>
  );
};

export default App;
