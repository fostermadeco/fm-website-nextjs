import Image from 'next/image';
import React from 'react';

import { TypeComponentBlockResponsiveFullImageFields } from '@types';
import useImageWidthResponsive from 'hooks/useImageWidthResponsive';

// https://dev.to/yago/understanding-next-image-13ff
// automatic responsive
const ResponsiveFullImage = ({ fields }: { fields: TypeComponentBlockResponsiveFullImageFields }) => {
    const { containerRef, width } = useImageWidthResponsive();
    if (!fields) return null;

    return (
        <div className="container relative">
            <div className="image-container-responsive" ref={containerRef}>
                <Image
                    className="image-responsive"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={75}
                    // sizes="640 768 1024 1400"
                    sizes={width}
                    src={`https:${fields.image.fields.media.fields.file.url}&fm=webp`}
                    alt={fields.image.fields.altText}
                />
            </div>
        </div>
    );
};

export default ResponsiveFullImage;
