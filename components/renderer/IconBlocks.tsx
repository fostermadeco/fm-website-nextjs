import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeComponentBlockIconBlocksFields } from '../../lib/types';

const IconBlocks = ({ fields }: { fields: TypeComponentBlockIconBlocksFields }) => {
    console.log('icons', { fields });

    return (
        <div style={{ position: 'relative' }}>
            <div className="container mx-auto">
                <div className="my-14">
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-6">
                        <div>
                            <h2 className="h5 overline">{fields.overline}</h2>
                            <p className="h3">{fields.headerText}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-6 my-10">
                        {fields.iconBlocks.map((b) => (
                            <div>
                                <Image
                                    src={`https:${b.fields.icon.fields.iconImage.fields.file.url}`}
                                    width={30}
                                    height={30}
                                />
                                <h4 className="h4 mt-4">{b.fields.headerText}</h4>
                                <p className="p-xl">{b.fields.paragraph}</p>
                                <Link href={b.fields.link.fields.slug}>
                                    <a className="h5 mt-4 inline-block">&mdash; Read More</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconBlocks;
