import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from "./Components/Routing/Home";
import Final from './Components/Routing/Final';
import Trails from './Components/Secondpage/Trails'
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/navbar/Footer';
import Blog from './Components/Blog/Blog';
import ViewBlog from './Components/Blog/ViewBlog';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trails" element={<Trails />} />
      <Route path="/details" element={<Final />} />


      <Route path="/navbar" element={<Navbar />} />
      <Route path="/footer" element={<Footer />} />
      <Route path='/blogs' element={<Blog />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/ViewBlog' element={<ViewBlog/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
