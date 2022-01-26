import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeComponentBlockIconBlocksFields } from '../../lib/types';

const IconBlocks = ({ fields }: { fields: TypeComponentBlockIconBlocksFields }) => {
    console.log('icons', { fields });
    if (!fields) return null;

    return (
        <div style={{ position: 'relative' }}>
            <div className="container mx-auto">
                <div className="grid grid-cols-14">
                    <div className="col-span-12 col-start-2">
                        <div className="my-14 md:mx-0">
                            {fields.overline && (
                                <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-6">
                                    <div>
                                        <h5 className="h5 overline">{fields.overline}</h5>
                                        <p className="h3">{fields.headerText}</p>
                                    </div>
                                </div>
                            )}
                            <div className="grid grid-cols-1 gap-0 my-10 md:grid-cols-2 md:gap-6">
                                {fields.iconBlocks.map((b) => (
                                    <div className="mb-8" key={`icon-block-${b.sys.id}`}>
                                        <Image
                                            src={`https:${b.fields.icon.fields.iconImage.fields.file.url}`}
                                            width={30}
                                            height={30}
                                        />
                                        <h4 className="mt-4 h4">{b.fields.headerText}</h4>
                                        <p className="p-xl">{b.fields.paragraph}</p>
                                        {b.fields.link && (
                                            <Link href={`/${b.fields.link.fields.slug}`}>
                                                <a className="inline-block mt-4 h5 emdash-in">Read More</a>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconBlocks;
