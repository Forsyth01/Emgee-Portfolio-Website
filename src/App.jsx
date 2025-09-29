import { Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
