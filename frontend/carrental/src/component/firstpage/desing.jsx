import { useEffect, useRef } from 'react';
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
                        <img src={img2} alt="thumb1" />
                        <div className="content">
                            <div className="title">Sarmoli</div>
                            <div className="description">The enchanting Himalayan haven</div>
                        </div>
                        <img src={img3} alt="thumb1" />
                        <div className="content">
                            <div className="title">Sarmoli</div>
                            <div className="description">The enchanting Himalayan haven</div>
                        </div>
                        <img src={img4} alt="thumb1" />
                        <div className="content">
                            <div className="title">Sarmoli</div>
                            <div className="description">The enchanting Himalayan haven</div>
                        </div>
                    </div>
                    {/* Add other slides similarly */}
                </div>

                <div className="thumbnail" ref={thumbnailBorderDom}>
                    <div className="item">
                        <img src={img2} alt="thumb1" />
                        <div className="content">
                            <div className="title">Sarmoli</div>
                            <div className="description">The enchanting Himalayan haven</div>
                        </div>
                        <img src={img3} alt="thumb1" />
                        <div className="content">
                            <div className="title">Sarmoli</div>
                            <div className="description">The enchanting Himalayan haven</div>
                        </div>
                        <img src={img4} alt="thumb1" />
                        <div className="content">
                            <div className="title">Sarmoli</div>
                            <div className="description">The enchanting Himalayan haven</div>
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
