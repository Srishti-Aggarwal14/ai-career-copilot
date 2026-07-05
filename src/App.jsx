import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ResumeForm from "./components/ResumeForm";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ResumeForm />
    </div>
  );
}


export default App;