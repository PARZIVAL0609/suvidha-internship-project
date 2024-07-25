import "./App.css";
import AddOns from "./components/AddOns";
import FeaturedIn from "./components/FeaturedIn";
import Hero from "./components/Hero";
import MarketPulse from "./components/MarketPulse";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <div className="bg-lightPeach ">
      <Hero/>
      <MarketPulse/>
        <ul>
          <li>Why Choose</li>
          <li>Companies</li>
          <li>Blogs</li>
          <li>Looking</li>
          <li>FAQ</li> {/* https://preline.co/docs/accordion.html */}          
        </ul>
        <AddOns/>
        <FeaturedIn/>
      </div>
        Grid
    </>
  );
}

export default App;
