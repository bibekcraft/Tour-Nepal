import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/routing/Home';
import MapOfNepal from '../../carrental/src/component/firstpage/MapofNepal'; 
import Trails from './component/secondpage/Trails';
import RouteDetails from './component/Thirdpage/RouteDetails';
import Practise from './component/Thirdpage/Practise';
import SearchBar from './component/firstpage/SearchBar';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trails/:id" element={<Trails />} />
                <Route path="/categories/:id" element={<MapOfNepal />} />
                <Route path="/trails" element={<Trails />} />
                <Route path="/route" element={<RouteDetails />} />
                <Route path="/practise" element={<Practise />} />
                <Route path="/search" element={<SearchBar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
