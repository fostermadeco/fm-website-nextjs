import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeBlockTechnologyBlocksFields, TypeTechnologyBlock } from '@types';

type TechnologyBlockProps = {
    block: TypeTechnologyBlock;
};

const TechnologyBlock = (props: TechnologyBlockProps) => {
    const { block } = props;

    if (!block.fields.link) return null;

    return (
        <Link href={`/services/technology/${block.fields.link.fields.slug}`}>
            <a className="block duration-200 ease-in rounded-full md:px-8 md:py-20 md:text-center group md:hover:bg-black md:w-60 md:h-60">
                <div
                    key={`technology-block-${block.sys.id}`}
                    className="relative flex items-start justify-start w-full md:items-center md:justify-center "
                    style={{ width: 'auto', height: '40px' }}
                >
                    <Image
                        className="z-0 transition md:opacity-50 md:grayscale group-hover:grayscale-0 group-hover:opacity-100"
                        src={`https:${block.fields.technology.fields.logo.fields.media.fields.file.url}`}
                        height={50}
                        width={120}
                    />
                </div>
                <p className="mt-4 duration-200 ease-in delay-100 md:ml-6 h5 emdash md:text-white md:text-center md:before:bg-white md:opacity-0 md:group-hover:opacity-100">
                    Read More
                </p>
            </a>
        </Link>
    );
};

const TechnologyBlocks = ({ fields }: { fields: TypeBlockTechnologyBlocksFields }) => {
    if (!fields || !fields.technologyBlocks) return null;

    return (
        <div className="">
            <div className="container mx-auto">
                <div className="mx-6 mt-10 mb-0 md:my-14 md:mx-0">
                    <div className="block md:grid grid-cols-14">
                        <div className="col-span-6 col-start-2">
                            <h2 className="h5 overline">{fields.overline}</h2>
                            <h3 className="h3">{fields.headerText}</h3>
                            <p className="p-xl">{fields.paragraph}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 my-10 mt-10 md:mt-20 md:grid md:grid-cols-14 md:gap-6">
                        {fields.technologyBlocks.map((b, i) => (
                            <div
                                className={`mb-8 md:col-span-4 ${i === 0 ? 'md:col-start-2' : ''} `}
                                key={`technology-block-${b.sys.id}`}
                            >
                                <TechnologyBlock block={b} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologyBlocks;
