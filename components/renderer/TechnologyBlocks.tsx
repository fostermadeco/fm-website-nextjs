import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeComponentBlockTechnologyBlocksFields } from '../../lib/types';
import { TypeComponentBlockTechnologyBlock } from '../../lib/types/TypeComponentBlockTechnologyBlock';

type TechnologyBlockProps = {
    block: TypeComponentBlockTechnologyBlock;
};

const TechnologyBlock = (props: TechnologyBlockProps) => {
    const { block } = props;
    console.log({ block });

    if (!block.fields.link) return null;

    return (
        <Link href={`/expertise/technology/${block.fields.link.fields.slug}`}>
            <a className="h4 text-center group">
                <div
                    key={`technology-block-${block.sys.id}`}
                    className="relative w-full flex items-center justify-center"
                    style={{ width: 'auto', height: '40px' }}
                >
                    <Image
                        className="z-0 transition opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                        src={`https:${block.fields.technology.fields.logo.fields.media.fields.file.url}`}
                        height={50}
                        layout="fill"
                    />
                </div>
            </a>
        </Link>
    );
};

const TechnologyBlocks = ({ fields }: { fields: TypeComponentBlockTechnologyBlocksFields }) => {
    console.log('TechnologyBlocks', { fields });
    if (!fields) return null;

    return (
        <div className="">
            <div className="container mx-auto">
                <div className="py-14 mx-6 md:mx-0">
                    <div className="grid grid-cols-14">
                        <div className="col-start-2 col-span-6">
                            <h2 className="h5 overline">{fields.overline}</h2>
                            <h3 className="h3">{fields.headerText}</h3>
                            <p className="p-xl">{fields.paragraph}</p>
                        </div>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-6 my-10">
                        {fields.technologyBlocks.map((b) => (
                            <TechnologyBlock key={`technology-block-${b.sys.id}`} block={b} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologyBlocks;
