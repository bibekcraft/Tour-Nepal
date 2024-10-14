import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScrollbarWrapper = ({ children }) => {
  useEffect(() => {
    const options = {
      damping: 0.05,  // Lower values for smoother scrolling (0.05 for ultra-smooth)
      thumbMinSize: 20, // Minimum size of the scrollbar thumb
      renderByPixels: true,  // Render using integer values to make animations smoother
      continuousScrolling: true, // Allows continuous scrolling when reaching the boundary
    };

    const scrollbar = Scrollbar.init(document.querySelector('#scroll-area'), options);

    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, []);

  return (
    <div id="scroll-area" style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScrollbarWrapper;
