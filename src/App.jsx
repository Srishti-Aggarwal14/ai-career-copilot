import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ResumeForm from "./components/ResumeForm";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import TitleChanger from "./components/TitleChanger";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ResumeForm />
      <Welcome />
      <Counter />
      <TitleChanger />
    </div>
  );
}


export default App;