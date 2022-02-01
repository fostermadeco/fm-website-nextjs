import Image from 'next/image';
import React from 'react';
import useDimensions from 'react-cool-dimensions';

import { TypeComponentBlockResponsiveFullImageFields } from '@types';

// https://dev.to/yago/understanding-next-image-13ff
// automatic responsive
const ResponsiveFullImage = ({ fields }: { fields: TypeComponentBlockResponsiveFullImageFields }) => {
    const { observe, width } = useDimensions<HTMLDivElement | null>();

    if (!fields) return null;

    return (
        <div className="container relative">
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
    );
};

export default ResponsiveFullImage;
