// src/App.js
import './App.css';
import SmoothScrollbarWrapper from '../src/component/scrolling/SmoothScrollbarWrapper ';
import Home from './component/routing/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapOfNepal from '../src/component/firstpage/MapofNepal'; // Ensure the correct casing
import Trails from '../src/component/secondpage/Trails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RouteDetails from '../src/component/Thirdpage/RouteDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Practise from '../src/component/Thirdpage/Practise';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SmoothScrollbarWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/map" element={<MapOfNepal />} /> */}
            <Route path="/trails/:id" element={<Trails />} />
            <Route path="/categories/:id" element={<MapOfNepal />} /> {/* Route for category details */}
            <Route path="/trails" element={<MapOfNepal />} />
            <Route path="/route" element={<RouteDetails />} />
            <Route path="/practise" element={<Practise />} />
          </Routes>
        </SmoothScrollbarWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
