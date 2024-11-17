import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/routing/Home';
import MapOfNepal from './component/firstpage/MapofNepal'; 
import Trails from './component/secondpage/Trails';
import RouteDetails from './component/Thirdpage/RouteDetails';
import Practise from './component/Thirdpage/Practise';
import SearchBar from './component/firstpage/SearchBar';
import Footer from './component/firstpage/Footer';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<MapOfNepal />} /> 
                <Route path="/route" element={<RouteDetails />} />
                <Route path="/trails" element={<Trails />} />
                <Route path="/categories/:category_id/trails" element={<Trails />} /> 
                <Route path="/practise" element={<Practise />} />
                <Route path="/search" element={<SearchBar />} />
                <Route path="/category/:categoryId" element={<MapOfNepal />} /> 
                <Route path='/footer' element={<Footer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
