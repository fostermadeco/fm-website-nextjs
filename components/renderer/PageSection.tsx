import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeComponentBlockPageSectionFields } from '../../lib/types';

const PageSection = ({ fields }: { fields: TypeComponentBlockPageSectionFields }) => {
    console.log({ fields });

    if (!fields) return null;

    return (
        <div style={{ position: 'relative' }}>
            <div className="mx-auto">
                <div className="my-14">
                    <div className="grid grid-cols-1 gap-0 items-center md:grid-cols-2 md:gap-8">
                        <div>
                            <div className="grid grid-cols-7">
                                <div
                                    className="col-start-2 col-span-5"
                                    style={{ position: 'relative', width: '100%', height: '620px' }}
                                >
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
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-7">
                                <div className="col-span-6">
                                    <div>
                                        <h1 className="h5 z-10">{fields.headerBlock.fields.overline}</h1>
                                        <p className="h3">{fields.headerBlock.fields.header}</p>
                                        <p className="p-lg mt-6">{fields.paragraph}</p>
                                        {fields.linkText && (
                                            <Link href="#">
                                                <a className="inline-block mt-4 text-black font-headline text-2xl underline">
                                                    {fields.linkText}
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageSection;
