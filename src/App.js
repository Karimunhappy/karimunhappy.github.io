import "./tailwind.css";
// import './App.css';
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";


function App() {
  return (
    <div className="App h-screen">
      <Router>
        <TopBar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
