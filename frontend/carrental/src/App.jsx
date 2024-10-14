import './App.css';
import SmoothScrollbarWrapper from '../src/component/scrolling/SmoothScrollbarWrapper '
import Home from '../src/component/routing/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapofNepal from '../src/component/firstpage/MapofNepal';

function App() {
  return (
    <BrowserRouter>
      <SmoothScrollbarWrapper>
        {/* Routes should be direct children of Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapofNepal />} />
        </Routes>
      </SmoothScrollbarWrapper>
    </BrowserRouter>
  );
}

export default App;
