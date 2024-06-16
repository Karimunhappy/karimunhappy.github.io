import "./tailwind.css";
// import './App.css';
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Activities";
import Page4 from "./components/ReasonToOrder";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import IncrementingNumber from "./components/Artikel";


function App() {
  return (
    <div className="App m-0 h-screen">
      <TopBar />
      {/* <IncrementingNumber /> */}
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
    </div>
  );
}

export default App;
