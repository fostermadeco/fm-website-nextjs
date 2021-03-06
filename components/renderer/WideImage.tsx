import Image from 'next/image';
import React from 'react';
import useDimensions from 'react-cool-dimensions';

import { TypeBlockWideImageFields } from '@types';

// https://dev.to/yago/understanding-next-image-13ff
// automatic responsive
const WideImage = ({ fields }: { fields: TypeBlockWideImageFields }) => {
    const { observe, width } = useDimensions<HTMLDivElement | null>();

    if (!fields) return null;

    return (
        <div className="container relative">
            <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                <div className="col-span-12 col-start-2 bg-lime">
                    <div className="image-container-responsive" ref={observe}>
                        <Image
                            className="image-responsive"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            quality={75}
                            // sizes="640 768 1024 1400"
                            sizes={width !== undefined ? `${Math.round(width)}px` : '100vw'}
                            src={`https:${fields.image.fields.media.fields.file.url}`}
                            alt={fields.image.fields.altText}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WideImage;
