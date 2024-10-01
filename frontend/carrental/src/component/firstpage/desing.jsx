import  { useEffect, useRef } from 'react';
import './places.css';
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
    const timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    useEffect(() => {
        const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');
        thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);

        // Auto run next slide
        // eslint-disable-next-line react-hooks/exhaustive-deps
        runNextAuto = setTimeout(() => {
            nextDom.current.click();
        }, timeAutoNext);

        return () => {
            clearTimeout(runNextAuto);
        };
    }, []);

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
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/contacts">Contacts</a>
                    <a href="/info">Info</a>
                </nav>
            </header>

            <div className="carousel" ref={carouselDom}>
                <div className="list" ref={SliderDom}>
                    <div className="item">
                        <img src={img2} alt="img1" />
                        <img src={img3} alt="img1" />
                        <img src={img4} alt="img1" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat...
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    {/* Repeat other items as needed */}
                </div>

                <div className="thumbnail" ref={thumbnailBorderDom}>
                    <div className="item">
                        <img src={img2}alt="thumb1" />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                    {/* Repeat other thumbnail items */}
                </div>

                <div className="arrows">
                    <button ref={prevDom} onClick={() => showSlider('prev')}>&lt;</button>
                    <button ref={nextDom} onClick={() => showSlider('next')}>&gt;</button>
                </div>

                <div className="time" ref={timeDom}></div>
            </div>
        </div>
    );
};

export default Design;
