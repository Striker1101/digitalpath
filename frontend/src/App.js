import Navigation from "./Utils/Navigation";
import Footer from "./Utils/Footer";
import RouthPaths from "./Utils/RouthPaths";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./Components/ScrollTop";
import { useNavigate } from "react-router-dom";
function App() {
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    const isFilled =
      JSON.parse(localStorage.getItem("isFilledContactForm")) || false;
    if (!isFilled) {
      navigate("/contact-us");
    }
  }, [navigate]);

  return (
    <div className="bg-[#01010b] text-white min-h-screen">
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="w-full h-auto bg-white">
        <Navigation />
        <RouthPaths />
        <Footer />
      </div>
    </div>
  );
}

export default App;
