import { TypeComponentImageWrapper } from '@types';
import Image from 'next/image';
import React from 'react';
import useDimensions from 'react-cool-dimensions';

type ResponsiveImageProps = {
    image: TypeComponentImageWrapper;
    priority: boolean;
    children: JSX.Element | JSX.Element[];
};

const ResponsiveImage = (props: ResponsiveImageProps) => {
    const { image, priority = false, children } = props;
    const { observe, width } = useDimensions<HTMLDivElement | null>();

    if (!image) return null;

    return (
        <div className="container relative">
            <div className="image-container-responsive" ref={observe}>
                <Image
                    className="image-responsive z-0"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={75}
                    // sizes="640 768 1024 1400"
                    sizes={width !== undefined ? `${Math.round(width)}px` : '100vw'}
                    src={`https:${image.fields.media.fields.file.url}`}
                    alt={image.fields.altText}
                    priority={priority}
                />
            </div>
            {children}
        </div>
    );
};

export default ResponsiveImage;
