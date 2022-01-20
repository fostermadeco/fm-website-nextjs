import Image from 'next/image';
import React from 'react';
import { TypeComponentPageIntroFields } from '../../lib/types';
import Arrow from '../Arrow';

// technically this is a landing page intro I think
// Right now there is only one option: blockImageOverlayIntro
const PageIntro = ({ fields }: { fields: TypeComponentPageIntroFields }) => {
    if (!fields) return null;

    return (
        <div className="relative">
            <div className="relative w-full" style={{ height: '620px' }}>
                <Image
                    className="z-0"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src={`https:${fields.image.fields.media.fields.file.url}`}
                    alt={fields.image.fields.altText}
                    priority
                />
                <div className="container mx-auto">
                    <div className="mx-6 md:mx-0">
                        <div
                            className="relative z-10 grid grid-cols-1 gap-0 md:grid-cols-14 md:grid-rows-3 md:gap-4"
                            style={{ height: '620px' }}
                        >
                            <div className="col-span-1 row-start-2 md:col-span-9 md:col-start-5">
                                <h1 className="z-10 text-white h5 overline">{fields.overline}</h1>
                                <p className="text-white h1">{fields.headerText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto mt-14 ">
                <div className="grid grid-cols-1 gap-0 -mt-40 md:grid-cols-14 md:gap-6 ">
                    <div className="col-span-3 col-start-1 px-6 py-8 mr-0 bg-white md:-mr-6">
                        <div className="flex items-center justify-start md:justify-center">
                            <div>
                                <Arrow direction="down" />
                            </div>
                            <h4 className="mt-2 ml-4 h4">Explore</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageIntro;
