import "./tailwind.css";
import './App.css';
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
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
            <Route path="/en" element={<Home />} />
            <Route path="/id" element={<Home />} />
            {/* <Route path="/karimunhappy" element={<Home />} /> */}
            <Route path="/en/home" element={<Home />} />
            <Route path="/en/Service" element={<Service />} />
            <Route path="/en/Explore" element={<Explore />} />
            <Route path="/en/Testimonials" element={<Testimonials />} />
            <Route path="/en/Paket/2D1N" element={<Paket2D1N />} />
            <Route path="/en/Paket/2D2N" element={<Paket2D2N />} />
            <Route path="/en/Paket/3D2N" element={<Paket3D2N />} />
            <Route path="/en/Paket/4D3N" element={<Paket4D3N />} />

            <Route path="/id/home" element={<Home />} />
            <Route path="/id/Service" element={<Service />} />
            <Route path="/id/Explore" element={<Explore />} />
            <Route path="/id/Testimonials" element={<Testimonials />} />
            <Route path="/id/Paket/2D1N" element={<Paket2D1N />} />
            <Route path="/id/Paket/2D2N" element={<Paket2D2N />} />
            <Route path="/id/Paket/3D2N" element={<Paket3D2N />} />
            <Route path="/id/Paket/4D3N" element={<Paket4D3N />} />

            {/* <Route path="/" element={<Home />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Paket/2D1N" element={<Paket2D1N />} />
            <Route path="/Paket/2D2N" element={<Paket2D2N />} />
            <Route path="/Paket/3D2N" element={<Paket3D2N />} />
            <Route path="/Paket/4D3N" element={<Paket4D3N />} /> */}
          </Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
