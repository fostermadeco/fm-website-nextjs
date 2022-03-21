import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import * as Contentful from 'contentful';
import { TypeTestimonialFields } from '@types';
import CarouselTemplate from './CarouselTemplate';

const CarouselSlideShow = ({ testimonials }: { testimonials: Contentful.Entry<TypeTestimonialFields>[] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const getConfigurableProps = () => ({
        showArrows: false,
        showStatus: false,
        showIndicators: false,
        infiniteLoop: true,
        showThumbs: false,
        useKeyboardArrows: true,
        autoPlay: false,
        stopOnHover: true,
        swipeable: true,
        dynamicHeight: true,
        emulateTouch: true,
        autoFocus: true,
        thumbWidth: 100,
        selectedItem: 0,
        interval: 2000,
        transitionTime: 500,
        swipeScrollTolerance: 5,
        ariaLabel: 'ariaLabel',
    });

    const CarouselTemplates = testimonials.map((item) => <CarouselTemplate key={Math.random()} testimonial={item} />);

    const previous = () => {
        setCurrentSlide(currentSlide - 1);
    };

    const next = () => {
        setCurrentSlide(currentSlide + 1);
    };

    const updateCurrentSlide = (index: number) => {
        if (currentSlide !== index) {
            setCurrentSlide(index);
        }
    };
    return (
        <>
            <div className="absolute z-10 block w-3/12 h-16 mx-6 bg-white mt-14 md:mx-0 md:grid md:grid-cols-14">
                <div className="col-span-6 col-start-2">
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <button type="button" onClick={previous}>
                                    PREV
                                </button>
                            </div>
                            <div>
                                <hr className="w-12" />
                            </div>
                            <div>
                                <button type="button" onClick={next}>
                                    NEXT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel {...getConfigurableProps()} onChange={updateCurrentSlide} selectedItem={currentSlide}>
                {CarouselTemplates}
            </Carousel>
        </>
    );
};

export default CarouselSlideShow;
