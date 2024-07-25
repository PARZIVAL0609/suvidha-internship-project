import "./App.css";
import AddOns from "./components/AddOns";
import Blogs from "./components/Blogs";
import FeaturedIn from "./components/FeaturedIn";
import Hero from "./components/Hero";
import Looking from "./components/Looking";
import MarketPulse from "./components/MarketPulse";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <div className="bg-lightPeach ">
        <Hero />
        <MarketPulse />
        <ul>
          <li>Why Choose</li>
          <li>Companies</li>
          <li>FAQ</li> {/* https://preline.co/docs/accordion.html */}
        </ul>
        <AddOns />
        <FeaturedIn />
        <Blogs />
        <Looking />
      </div>
      Grid
    </>
  );
}

export default App;
