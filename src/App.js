import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/company" element={<Company />}></Route>
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Routes>
          <Route path="/NewProject" element={<NewProject />}></Route>
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <Routes>
          <Route path="/project/:id" element={<Project />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
