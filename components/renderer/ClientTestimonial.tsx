import Image from 'next/image';
import React from 'react';
import useDimensions from 'react-cool-dimensions';

import { TypeComponentBlockClientTestimonialFields } from '../../lib/types';

// https://dev.to/yago/understanding-next-image-13ff
// automatic responsive
const ClientTestimonial = ({ fields }: { fields: TypeComponentBlockClientTestimonialFields }) => {
    console.log({ fields });

    if (!fields) return null;

    const { client, quote, authorName, authorTitle } = fields;
    const { logo } = client.fields;

    return (
        <div className="relative mx-auto bg-black ">
            <div className="block py-20 mx-6 md:py-40 md:grid md:grid-cols-14">
                <div className="col-span-12 col-start-2 ">
                    <h5 className="text-white h5 overline">Client Testimonial</h5>
                    <div className="relative mt-8 mb-8 md:mb-12">
                        <Image
                            width={logo.fields.media.fields.file.details.image?.width}
                            height={logo.fields.media.fields.file.details.image?.height}
                            quality={75}
                            src={`https:${logo.fields.media.fields.file.url}`}
                            alt={logo.fields.altText}
                        />
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
