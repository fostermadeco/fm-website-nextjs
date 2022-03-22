import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import * as Contentful from 'contentful';
import { TypeTestimonialFields } from '@types';

const CarouselTemplate = ({ testimonial }: { testimonial: Contentful.Entry<TypeTestimonialFields> }) => {
    const imageSrc = testimonial?.fields?.image?.fields.media.fields.file.url;
    const clientName = testimonial?.fields?.client?.fields.name;
    const { quote, authorName, authorTitle, quoteShort } = testimonial.fields;

    return (
        <div className="relative">
            <div className="container mx-auto">
                <div className="md:my-14">
                    <div
                        className="bottom-0 z-10 items-center block grid-cols-1 gap-0 mx-6 md:absolute md:mx-0 md:grid md:grid-cols-14"
                        style={{ height: '90%' }}
                    >
                        <div
                            className="col-span-8 py-10 text-white bg-black md:py-10 col-start-0"
                            style={{ height: '90%' }}
                        >
                            <div className="block h-full mx-6 md:mx-0 md:grid md:grid-cols-7">
                                <div className="col-span-5 col-start-2">
                                    <div className="grid items-center" style={{ height: '95%' }}>
                                        <div>
                                            <h2 className="pb-5 text-left text-white overline h5">{clientName}</h2>
                                            <p className="pb-5 text-3xl text-left text-white md:text-2xl ">
                                                "{quoteShort || quote}"
                                            </p>
                                            <p className="text-left text-white">
                                                {authorName}, {authorTitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center hidden grid-cols-1 gap-0 mx-6 md:mx-0 md:grid md:grid-cols-14">
                        <div className="col-span-10 col-start-5">
                            <div className="mt-6 md:mt-0">
                                <div className="relative w-full h-72 md:h-page-section-image-height-desktop">
                                    <Image
                                        className="z-0"
                                        height={620}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                        src={`https:${imageSrc || ''}`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselTemplate;
