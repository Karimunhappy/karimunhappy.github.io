import "./tailwind.css";
import './App.css';
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Bot from "./components/Bot";
import Service from "./Pages/Service";
import Explore from "./components/Explore";
import Testimonials from "./components/Testimonials";
import Paket2D1N from "./components/PaketKarimunjawa/Paket2D1N";
import Paket3D2N from "./components/PaketKarimunjawa/Paket3D2N";
import Paket4D3N from "./components/PaketKarimunjawa/Paket4D3N";
import Paket2D2N from "./components/PaketKarimunjawa/Paket2D2N";


function App() {
  return (
    <div className="App w-screen">
      <Router>
        <TopBar />
        <Bot />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Paket/2D1N" element={<Paket2D1N />} />
            <Route path="/Paket/2D2N" element={<Paket2D2N />} />
            <Route path="/Paket/3D2N" element={<Paket3D2N />} />
            <Route path="/Paket/4D3N" element={<Paket4D3N />} />
          </Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
