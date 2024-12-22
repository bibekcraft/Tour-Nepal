import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './component/routing/Home';
import Home from './component/routing/Home'
import Why from './new/Why';
import MapOfNepal from './component/firstpage/MapofNepal'; 
import Trails from './component/secondpage/Trails';
import Practise from './component/Thirdpage/Practise';
import SearchBar from './component/firstpage/SearchBar';
import Footer from './component/firstpage/Footer';
import Bloginput from './component/blog/Bloginput';
import TrendingDestinations from './new/TrendingDestinations'
import Populartour from './new/Populartour';
import Crausel from './new/Crausel'
import Popularthingtodo from './new/Popularthingtodo';
import DsnCrausel from './new/DsnCrausel'
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
                <Route path='/blog' element={<Bloginput />} />
                <Route path='/why' element={<Why/>} />
                <Route path='/TrendingDestinations' element={<TrendingDestinations/>} />
                <Route path='/Populartour' element={<Populartour/>} />

                <Route path='/crausels' element={<Crausel />} />
                <Route path='/Popularthingtodo' element={<Popularthingtodo/>} />
                <Route path='/DsnCrausel' element={<DsnCrausel/>} />

                {/* <Route path='/home' element={<Home/>}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
