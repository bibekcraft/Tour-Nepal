import './App.css';
import SmoothScrollbarWrapper from '../src/component/scrolling/SmoothScrollbarWrapper '; // Ensure no trailing spaces
import Home from './component/routing/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapOfNepal from '../../carrental/src/component/firstpage/MapofNepal'; // Ensure the correct casing
import Trails from '../src/component/secondpage/Trails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RouteDetails from '../src/component/Thirdpage/RouteDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Practise from '../src/component/Thirdpage/Practise';
import SearchBar from '../src/component/firstpage/SearchBar';


// Main App Component
function App() {
    const queryClient = new QueryClient();

    return (
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <SmoothScrollbarWrapper>
                        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/trails/:id" element={<Trails />} />
  <Route path="/categories/:id" element={<MapOfNepal />} />
  <Route path="/trails" element={<Trails />} />
  <Route path="/route" element={<RouteDetails />} />
  <Route path="/practise" element={<Practise />} />
  <Route path='/search' element={<SearchBar />} />
  <Route path="/category/:id" component={Trails} />

</Routes>

                    </SmoothScrollbarWrapper>
                </BrowserRouter>
            </QueryClientProvider>
    );
}

export default App;
