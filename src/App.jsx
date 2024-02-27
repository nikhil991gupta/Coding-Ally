import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Stats from "./components/Stats";
import Feedback from "./components/Feedback";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Stats />
      <Feature />
      <Gallery />
      <Feedback />
    </>
  );
}

export default App;
