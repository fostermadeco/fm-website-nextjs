import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import * as Contentful from 'contentful';
import { TypeCaseStudy } from '@types';
import CaseStudySlide from './CaseStudySlide';

const CaseStudySlideShow = ({ caseStudies }: { caseStudies: Contentful.Entry<TypeCaseStudy>[] }) => {
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

    const CaseStudyTemplates = caseStudies.map((item) => <CaseStudySlide key={Math.random()} caseStudy={item} />);

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
        <div className="relative">
            <div className=" mx-6 mb-4 md:mb-0 md:mx-0 md:grid md:grid-cols-14 md:h-[96px] top-0 w-full">
                <div className="bg-white " />
                <div className="">
                    <div className="w-[310px] h-full bg-white">
                        <div className="grid h-full pr-14">
                            <div className="flex items-center gap-5">
                                <div className="flex-none">
                                    <button type="button" onClick={previous} className="mb-0 mr-4 h5">
                                        Prev
                                    </button>
                                </div>
                                <div className="grow">
                                    <hr className="w-13" style={{ border: '1px solid' }} />
                                </div>
                                <div className="flex-none">
                                    <button type="button" onClick={next} className="mb-0 ml-4 h5">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel {...getConfigurableProps()} onChange={updateCurrentSlide} selectedItem={currentSlide}>
                {CaseStudyTemplates}
            </Carousel>
        </div>
    );
};

export default CaseStudySlideShow;
