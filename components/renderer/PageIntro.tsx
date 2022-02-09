import useImageWidthResponsive from 'hooks/useImageWidthResponsive';
import Image from 'next/image';
import React from 'react';
import { TypeComponentPageIntroFields } from '../../lib/types';
import Arrow from '../Arrow';

// technically this is a landing page intro I think
// Right now there is only one option: blockImageOverlayIntro
const PageIntro = ({ fields }: { fields: TypeComponentPageIntroFields }) => {
    const { containerRef, width } = useImageWidthResponsive();
    console.log({ width });
    console.log(fields.image.fields.media.fields.file.url);

    if (!fields) return null;

    return (
        <div className="relative">
            <div className="relative w-full" style={{ height: '620px' }} ref={containerRef}>
                {/* TODO: Why does webp make the image load slower */}
                <Image
                    className="z-0"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src={`https:${fields.image.fields.media.fields.file.url}`}
                    alt={fields.image.fields.altText}
                    sizes={width}
                    priority
                />
                <div className="container mx-auto">
                    <div className="mx-6 md:mx-0">
                        <div
                            className="relative z-10 grid grid-cols-1 gap-0 md:grid-cols-14 md:grid-rows-3 md:gap-4"
                            style={{ height: '620px' }}
                        >
                            <div className="col-span-1 row-start-2 md:col-span-9 md:col-start-6">
                                <h1 className="z-10 text-white h5 overline">{fields.overline}</h1>
                                <p className="text-white h1">{fields.headerText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto md:mt-14">
                <div className="hidden grid-cols-1 gap-0 md:grid md:-mt-52 md:grid-cols-14 md:gap-6">
                    <div className="col-start-1 px-6 py-10 mr-0 bg-white md:py-18 md:px-12 md:col-span-5 lg:col-span-4 lg:-mr-6">
                        &nbsp;
                    </div>
                </div>
                <div className="container mx-auto mb-2 md:mb-20 md:-mt-44">
                    <div className="grid grid-cols-14">
                        <div className="col-span-2 col-start-2 py-6 bg-white md:py-14 xl:col-start-2">
                            <div className="flex items-center -ml-2">
                                <div>
                                    <Arrow direction="down" />
                                </div>
                                <h4 className="mt-2 ml-8 h4">Explore</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageIntro;
