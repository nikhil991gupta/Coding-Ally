import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Stats from "./components/Stats";
import Feedback from "./components/Feedback";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
// import MockInterview from "./components/MockInterview";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Stats />
      <Feature />
      <Gallery />
      {/* <MockInterview/> */}
      <Feedback />
    </>
  );
}

export default App;
