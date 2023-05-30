import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import FirtsPage from "./components/FirtsPage";
import PageImage from "./pages/PageImage";
import Contact from "./pages/Contact";

function App() {
  return (
    <section className="h-screen ">
      <Nav />
      <Routes>
        <Route path="/" element={<FirtsPage />} />
        <Route path="/about" element={<div />} />
        <Route path="/PageImages" element={<PageImage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </section>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />{" "}
    </BrowserRouter>
  );
}

export default Root;
