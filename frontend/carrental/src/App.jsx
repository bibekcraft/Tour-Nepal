import Home from './component/routing/Home';
import MapOfNepal from './component/firstpage/MapofNepal'; 
import Trails from './component/secondpage/Trails';
import Practise from './component/Thirdpage/Practise';
import SearchBar from './component/firstpage/SearchBar';
import Footer from './component/firstpage/Footer';
import PhuketTours from './secondpage/PhuketTours';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories/:id" element={<MapOfNepal />} /> 
                <Route path="/categories/:categoryId/trails" element={<Trails />} />
                <Route path="/trail/:id" element={<Trails />} />
                <Route path="/practise" element={<Practise />} />
                <Route path="/search" element={<SearchBar />} />
                <Route path='/footer' element={<Footer />} />
                <Route path='/trails' element={<PhuketTours />} />



            </Routes>
        </BrowserRouter>
    );
}

export default App;
