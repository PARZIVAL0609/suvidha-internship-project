import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <div className="bg-lightPeach ">
        <ul>
          <li><Hero/></li>
          <li>Market Pulse</li>
          <li>Why Choose</li>
          <li>Companies</li>
          <li>Pais Add-ons</li>
          <li>Featured in</li>
          <li>Blogs</li>
          <li>Looking</li>
          <li>FAQ</li>
        </ul>
      </div>
        Grid
    </>
  );
}

export default App;
