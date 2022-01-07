import Image from 'next/image';
import React from 'react';
import { TypeComponentPageIntroFields } from '../../lib/types';

// technically this is a landing page intro I think
const PageIntro = ({ fields }: { fields: TypeComponentPageIntroFields }) => {
    if (!fields) return null;

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', height: '620px' }}>
                <Image
                    className="z-0"
                    height={420}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src={`https:${fields.image.fields.media.fields.file.url}`}
                    alt=""
                />
                <div className="container mx-auto">
                    <div className="mx-6">
                        <div
                            className="z-10 relative grid grid-cols-1 gap-0 md:grid-cols-14 md:grid-rows-3 md:gap-8"
                            style={{ height: '620px' }}
                        >
                            <div className="col-span-1 md:col-span-9 md:col-start-5 row-start-2">
                                <h1 className="h5 text-white z-10">{fields.overline}</h1>
                                <p className="h1 text-white">{fields.headerText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageIntro;
