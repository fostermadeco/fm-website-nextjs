import Image from 'next/image';
import React from 'react';
import { TypeComponentPageIntro } from '../lib/types';

// technically this is a landing page intro I think
const PageIntro = ({ pageIntro }: { pageIntro: TypeComponentPageIntro }) => {
    console.log({ pageIntro });

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', height: '620px' }}>
                <Image
                    className="z-0"
                    height={420}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src={`https:${pageIntro.fields.image.fields.media.fields.file.url}`}
                    alt=""
                />
                <div className="z-10 relative grid grid-rows-3 grid-cols-3" style={{ height: '620px' }}>
                    <div className="md:col-span-2 md:col-start-2 md:row-start-2">
                        <h1 className="h5 text-white z-10">{pageIntro.fields.overline}</h1>
                        <p className="h1 text-white">{pageIntro.fields.headerText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageIntro;
