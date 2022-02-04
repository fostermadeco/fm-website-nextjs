import Image from 'next/image';
import React from 'react';

import { TypeComponentBlockClientTestimonialFields } from '../../lib/types';

// https://dev.to/yago/understanding-next-image-13ff
// automatic responsive
const ClientTestimonial = ({ fields }: { fields: TypeComponentBlockClientTestimonialFields }) => {
    if (!fields) return null;

    const { client, quote, authorName, authorTitle } = fields;
    const { logo } = client.fields;

    return (
        <div className="relative mx-auto bg-black ">
            <div className="block py-20 mx-6 md:py-40 md:grid md:grid-cols-14">
                <div className="col-span-12 col-start-2 ">
                    <h5 className="text-white h5 overline">Client Testimonial</h5>
                    <div className="mt-8 mb-8 md:mb-12">
                        <div className="relative pb-12 w-52">
                            <Image
                                layout="fill"
                                objectFit="contain"
                                quality={75}
                                src={`https:${logo.fields.media.fields.file.url}`}
                                alt={logo.fields.altText}
                            />
                        </div>
                    </div>
                    <figure className="text-white">
                        <blockquote>
                            <p className="text-2xl italic font-bold leading-tight text-white md:text-5xl font-headline">
                                "{quote}"
                            </p>
                        </blockquote>
                        <figcaption className="mt-12 text-xl text-white">
                            {authorName}, {authorTitle}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default ClientTestimonial;
