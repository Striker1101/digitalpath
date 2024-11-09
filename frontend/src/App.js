import Navigation from "./Utils/Navigation";
import Footer from "./Utils/Footer";
import RouthPaths from "./Utils/RouthPaths";
function App() {
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
