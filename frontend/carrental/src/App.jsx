import './App.css';
import SmoothScrollbarWrapper from '../src/component/scrolling/SmoothScrollbarWrapper '
import Home from '../src/component/routing/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapofNepal from '../src/component/firstpage/MapofNepal';
import Trails from '../src/component/secondpage/Trails';


import Contect from '../src/component/secondpage/Context'

function App() {
  return (
    <BrowserRouter>
      <SmoothScrollbarWrapper>
        {/* Routes should be direct children of Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapofNepal />} />
          <Route path="/Contect" element={<Contect />} />

          <Route path="/trails" element={<Trails />} />


        </Routes>
      </SmoothScrollbarWrapper>
    </BrowserRouter>
  );
}

export default App;
