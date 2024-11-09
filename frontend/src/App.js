import Navigation from "./Utils/Navigation";
import Footer from "./Utils/Footer";
import RouthPaths from "./Utils/RouthPaths";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const location = useLocation();

  useEffect(() => {
    const handleHashLinkScroll = (event) => {
      // Only proceed if the target is a hash link
      if (event.target.tagName === "A" && event.target.hash) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = event.target.hash.slice(1); // Remove '#' to get the id
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Add event listener for all clicks
    document.addEventListener("click", handleHashLinkScroll);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleHashLinkScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to section if the URL contains a hash on initial load
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className="bg-[#01010b] text-white min-h-screen">
      <div className="w-full h-auto bg-white">
        <Navigation />
        <RouthPaths />
        <Footer />
      </div>
    </div>
  );
}

export default App;
