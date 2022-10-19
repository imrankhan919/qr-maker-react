import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {GlobalProvider} from './Context/GlobalContext'
function App() {

  return (
    <>
      <GlobalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
