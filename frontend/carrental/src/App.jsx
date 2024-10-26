// src/App.js
import './App.css';
import SmoothScrollbarWrapper from './component/scrolling/SmoothScrollbarWrapper '; // Ensure there's no trailing space in the import path
import Home from './component/routing/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapOfNepal from '../src/component/firstpage/MapofNepal'; // Ensure the correct casing
import Trails from './component/secondpage/Trails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SmoothScrollbarWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapOfNepal />} />
            <Route path="/trails/:id" element={<Trails />} /> {/* Dynamic route for Trails */}
          </Routes>
        </SmoothScrollbarWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
