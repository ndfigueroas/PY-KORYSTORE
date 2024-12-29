import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Index from "./pages/Index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Catalogo from "./pages/Catalogo";
import About from "./pages/About";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Router>
      <main>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<ContactPage />} />          
        </Routes>
        <Footer/>
      </main>
    </Router>
  )
}

export default App
