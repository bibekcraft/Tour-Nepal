import './App.css';
import SmoothScrollbarWrapper from '../src/component/scrolling/SmoothScrollbarWrapper '
import Home from '../src/component/routing/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapofNepal from '../src/component/firstpage/MapofNepal';
import District from '../src/component/SecondPage/District'
import Place from '../src/component/SecondPage/Place'
import Provience from '../src/component/SecondPage/Provience'

function App() {
  return (
    <BrowserRouter>
      <SmoothScrollbarWrapper>
        {/* Routes should be direct children of Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapofNepal />} />
          <Route path="/District" element={<District />} />
          <Route path="/Place" element={<Place />} />
          <Route path="/Provience" element={<Provience />} />

        </Routes>
      </SmoothScrollbarWrapper>
    </BrowserRouter>
  );
}

export default App;
