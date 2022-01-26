import Image from 'next/image';
import React from 'react';
import { TypeComponentBlockImageWithPartialOverlayFields } from '../../lib/types';
import TextMarkdown from '../TextMarkdown';

const ImageWithPartialOverlay = ({ fields }: { fields: TypeComponentBlockImageWithPartialOverlayFields }) => {
    if (!fields) return null;
    const { paragraphText } = fields;
    console.log({ fields });

    // console.log({ is: isRichText(paragraphText) });

    // const textComp = isRichText(paragraphText) ? renderRichText(paragraphText) : paragraphText;
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
                />
            </div>
            <div className="container mx-auto">
                <div className="mb-14 md:mb-20">
                    <div className="relative z-10 grid grid-cols-1 gap-0 -mt-36 md:grid-cols-2 md:gap-8">
                        <div className="bg-white pt-14">
                            <div className="grid grid-cols-7">
                                <div className="col-span-7 col-start-1 mx-6 md:mx-0 md:col-start-2 md:col-span-5">
                                    <h2 className="h5 overline">{fields.overline}</h2>
                                    <p className="h3">{fields.headerText}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-6 mt-0 md:mx-0 md:mt-48">
                            <div className="grid grid-cols-7">
                                <div className="col-span-6">
                                    <TextMarkdown text={paragraphText} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageWithPartialOverlay;
