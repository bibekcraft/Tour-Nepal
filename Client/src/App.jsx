import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from "./Components/Routing/Home";
import Final from './Components/Routing/Final';
import Trails from './Components/Secondpage/Trails'
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/navbar/Footer';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trails" element={<Trails />} />
      <Route path="/final" element={<Final />} />


      <Route path="/navbar" element={<Navbar />} />
      <Route path="/footer" element={<Footer />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
