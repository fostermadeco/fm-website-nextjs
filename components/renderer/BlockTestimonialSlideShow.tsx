import React from 'react';
import { TypeBlockTestimonialSlideShowFields } from '@types';
import CarouselSlideShow from '../CarouselSlideShow';

const BlockTestimonialSlideShow = ({ fields }: { fields: TypeBlockTestimonialSlideShowFields }) => {
    if (!fields) return null;

    const { overline, headerText, testimonials } = fields;

    return (
        <div className="container relative">
            <div className="my-20">
                <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                    <div className="col-span-6 col-start-2">
                        <div className="flex items-center">
                            <div>
                                {overline && <h3 className="overline h5">{overline}</h3>}
                                {headerText && <p className="h3">{headerText}</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="mb-14 md:mb-20">
                        <CarouselSlideShow testimonials={testimonials || []} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockTestimonialSlideShow;
