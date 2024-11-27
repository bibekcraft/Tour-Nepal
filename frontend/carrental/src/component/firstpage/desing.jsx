/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const Design = () => {
    const nextDom = useRef(null);
    const prevDom = useRef(null);
    const carouselDom = useRef(null);
    const SliderDom = useRef(null);
    const thumbnailBorderDom = useRef(null);
    const timeDom = useRef(null);

    const timeRunning = 3000;
    const timeAutoNext = 5000; // Auto change every 5 seconds
    let runTimeOut;
    let runNextAuto;

    const [activeThumbnail, setActiveThumbnail] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in'); // To handle fade in/out animation

    const thumbnails = [img2, img3, img4]; // List of images
    const titles = ["Sarmoli", "Majestic Peaks", "Serene Valley"]; // Titles for images
    const descriptions = [
        "The enchanting Himalayan haven",
        "Majestic snow-capped mountains",
        "A peaceful valley with pristine beauty"
    ]; // Descriptions for images

    useEffect(() => {
        // Automatically switch the thumbnail and image every 5 seconds
        const thumbnailInterval = setInterval(() => {
            handleNext();
        }, timeAutoNext);

        return () => {
            clearInterval(thumbnailInterval);
        };
    }, [activeThumbnail]);

    const handleNext = () => {
        setFadeClass('fade-out'); // Start fade-out animation
        setTimeout(() => {
            setActiveThumbnail((prev) => (prev + 1) % thumbnails.length); // Change the image
            setFadeClass('fade-in'); // Start fade-in animation
        }, 500); // Delay to let fade-out complete
    };

    const showSlider = (type) => {
        const SliderItemsDom = SliderDom.current.querySelectorAll('.item');
        const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');

        if (type === 'next') {
            SliderDom.current.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
            carouselDom.current.classList.add('next');
        } else {
            SliderDom.current.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.current.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.current.classList.remove('next');
            carouselDom.current.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.current.click();
        }, timeAutoNext);
    };

    return (
        <div>
            <header className="relative z-10 flex items-center w-11/12 h-12 max-w-4xl mx-auto">
                {/* Add any header content here if needed */}
            </header>

            <div className="carousel h-screen mt-[-50px] w-full overflow-hidden relative" ref={carouselDom}>
                {/* Main Image Section */}
                <div className={`list absolute inset-0 transition-all duration-700 ${fadeClass}`} ref={SliderDom}>
                    <div className="absolute relative inset-0 w-full h-full item">
                        <img src={thumbnails[activeThumbnail]} alt={`main-img${activeThumbnail + 1}`} className="object-cover w-full h-full" />
                        {/* Top gradient overlay */}
                            <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-gray-100 to-transparent" />                        {/* Bottom gradient overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-1/8bg-gradient-to-t from-gray-100 to-transparent" />                    
                            <div className="absolute w-11/12 max-w-4xl text-white transform -translate-x-1/2 top-1/4 left-1/2 text-shadow-md">
                            <div className="text-5xl font-bold">{titles[activeThumbnail]}</div>
                            <div className="text-3xl font-light">{descriptions[activeThumbnail]}</div>
                        </div>
                    </div>
                </div>

                {/* Thumbnail Section */}
                <div className="absolute z-10 flex flex-col gap-5 transform -translate-y-1/2 thumbnail right-10 top-1/4" ref={thumbnailBorderDom}>
                    {thumbnails.map((thumb, index) => (
                        <div
                            key={index}
                            className={`item w-[100px] h-[150px] relative ${activeThumbnail === index ? 'border-4 border-orange-500' : ''}`}
                        >
                            <img src={thumb} alt={`thumb${index + 1}`} className="object-cover w-full h-full rounded-lg" />
                        </div>
                    ))}
                </div>

                {/* Arrows Section */}
                {/* <div className="absolute z-10 flex gap-2 transform translate-y-1/2 arrows top-1/2 left-2">
                    <button className="w-10 h-10 bg-gray-300 bg-opacity-50 rounded-full" ref={prevDom} onClick={() => showSlider('prev')}>
                        &lt;
                    </button>
                </div>
                <div className="absolute z-10 flex gap-2 transform translate-y-1/2 arrows top-1/2 right-2">
                    <button className="w-10 h-10 bg-gray-300 bg-opacity-50 rounded-full" ref={nextDom} onClick={() => showSlider('next')}>
                        &gt;
                    </button>
                </div> */}

                {/* Time bar */}
                <div className="time absolute top-0 left-0 w-0 h-[3px] bg-orange-600" ref={timeDom}></div>
            </div>

            {/* CSS Styles */}
            <style jsx ="true">{`
                .fade-in {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 0.5s ease-in, transform 0.5s ease-in;
                }

                .fade-out {
                    opacity: 0;
                    transform: translateY(-10px); /* Move up slightly during fade out */
                    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                }

                .text-shadow-md {
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
                }
            `}</style>
        </div>
    );
};

export default Design;
