import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import * as Contentful from 'contentful';
import { TypeTestimonialFields } from '@types';

const CarouselTemplate = ({ testimonial }: { testimonial: Contentful.Entry<TypeTestimonialFields> }) => {
    const imageSrc = testimonial?.fields?.image?.fields.media.fields.file.url;
    const clientName = testimonial?.fields?.client?.fields.name;
    const { quote } = testimonial.fields;
    const { authorName } = testimonial.fields;
    const { authorTitle } = testimonial.fields;

    return (
        <div className="relative">
            <div className="container mx-auto">
                <div className="my-14">
                    <div
                        className="absolute bottom-0 z-10 items-center block grid-cols-1 gap-0 mx-6 absoluteb md:mx-0 md:grid md:grid-cols-14"
                        style={{ height: '90%' }}
                    >
                        <div
                            className="col-span-8 pt-10 pl-1 text-white bg-black col-start-0 "
                            style={{ height: '90%' }}
                        >
                            <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                                <div className="col-span-7 col-start-3">
                                    <div className="flex items-center">
                                        <div>
                                            <h2 className="pb-5 text-left overline">{clientName}</h2>
                                            <p className="pb-5 text-2xl text-left text-white ">"{quote}"</p>
                                            <p className="text-left text-white">
                                                {authorName}, {authorTitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center block grid-cols-1 gap-0 mx-6 md:mx-0 md:grid md:grid-cols-14">
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
