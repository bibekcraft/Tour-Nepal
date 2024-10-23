import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import province1Image from '../../assets/mustang.jpg'; 
import province2Image from '../../assets/np.png';
import province3Image from '../../assets/pokhara.jpg';
import hm from '../../assets/futurebg.png';

const MapOfNepal = () => {
  const items = [
    { image: province1Image, label: 'Mountain Trails', link: '/mountain-trails' },
    { image: province2Image, label: 'Trekking Trails', link: '/trekking-trails' },
    { image: province3Image, label: 'Hiking Trails', link: '/hiking-trails' },
    { image: province1Image, label: 'Lakes', link: '/lakes' },
    { image: province2Image, label: 'Wildlife Reserve', link: '/wildlife-reserve' },
    { image: province3Image, label: 'Districts', link: '/districts' },
    { image: province1Image, label: 'Historical Sites', link: '/historical-sites' },
    { image: province2Image, label: 'Temples', link: '/temples' },
    { image: province3Image, label: 'Adventure Activities', link: '/adventure-activities' },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstItemWidth = carouselRef.current.children[0].clientWidth;
        const currentTransform = getComputedStyle(carouselRef.current).transform;
        const currentTranslateX = currentTransform === 'none' ? 0 : parseFloat(currentTransform.split(',')[4]);

        // Move the carousel to the left
        carouselRef.current.style.transform = `translateX(${currentTranslateX - firstItemWidth}px)`;

        // Reset position after scrolling through all items
        if (Math.abs(currentTranslateX) >= firstItemWidth * (items.length - 2)) {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = `translateX(0)`;
          setTimeout(() => {
            carouselRef.current.style.transition = 'transform 0.5s ease';
          }, 50);
        }
      }
    }, 3000); // Adjust the speed here

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white">
      <div 
        className="absolute inset-0 z-0 bg-center"
        style={{
          backgroundImage: `url(${hm})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Title Section */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-8 text-center">
          <h2 className="text-5xl font-bold text-white md:text-8xl">Explore Nepal</h2>
          <p className="mt-4 text-lg text-white">Discover the beauty and adventure that awaits you.</p>
        </div>

        {/* Carousel Section */}
        <div className="relative z-10 w-full mt-12 overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ whiteSpace: 'nowrap' }}
          >
            {/* Duplicate the items to create an infinite scroll effect */}
            {[...items, ...items].map((item, index) => (
              <div key={index} className="flex flex-col items-center inline-block w-40 mx-4 space-y-2">
                <Link to={item.link}>
                  <div className="relative flex items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <p className="text-lg font-bold text-gray-700 md:text-xl">{item.label}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapOfNepal;
