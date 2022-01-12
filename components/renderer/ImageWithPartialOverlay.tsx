import Image from 'next/image';
import React from 'react';
import { TypeComponentBlockImageWithPartialOverlayFields } from '../../lib/types';

const ImageWithPartialOverlay = ({ fields }: { fields: TypeComponentBlockImageWithPartialOverlayFields }) => {
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
            </div>
            <div className="mx-auto">
                <div className="mb-14">
                    <div className="z-10 -mt-36 relative grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-8">
                        <div className="bg-white pt-14">
                            <div className="grid grid-cols-7">
                                <div className="col-start-2 col-span-5">
                                    <h2 className="h5 z-10">{fields.overline}</h2>
                                    <p className="h3">{fields.headerText}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-6 mt-0 md:mx-0 md:mt-48">
                            <p className="p-xl">{fields.paragraphText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageWithPartialOverlay;
