import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeComponentBlockIndustryBlocksFields } from '../../lib/types';
import { TypeComponentBlockIndustryBlock } from '../../lib/types/TypeComponentBlockIndustryBlock';

type IndustryBlockProps = {
    block: TypeComponentBlockIndustryBlock;
};

const IndustryBlock = (props: IndustryBlockProps) => {
    const { block } = props;
    console.log({ block });

    if (!block.fields.link) return null;

    return (
        <Link href={`/expertise/industry/${block.fields.link.fields.slug}`}>
            <a className="h4 text-center text-white group">
                <div
                    key={`industry-block-${block.sys.id}`}
                    className="relative w-full flex items-center justify-center"
                    style={{ height: '500px' }}
                >
                    <Image
                        className="z-0 transition opacity-25 group-hover:opacity-50"
                        src={`https:${block.fields.industry.fields.listImage.fields.media.fields.file.url}`}
                        height={500}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="z-10 relative border-b-2 border-white">{block.fields.industry.fields.title}</div>
                </div>
            </a>
        </Link>
    );
};

const IndustryBlocks = ({ fields }: { fields: TypeComponentBlockIndustryBlocksFields }) => {
    console.log('IndustryBlocks', { fields });
    if (!fields) return null;

    return (
        <div className="bg-black">
            <div className="container mx-auto">
                <div className="py-14 mx-6 md:mx-0">
                    <div className="mx-auto text-center max-w-2xl">
                        <h2 className="h5 overline text-white">{fields.overline}</h2>
                        <h3 className="h2 text-white">{fields.headerText}</h3>
                        <p className="p-xl text-white px-8">{fields.paragraph}</p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-6 my-10">
                        {fields.industryBlocks.map((b) => (
                            <IndustryBlock key={`industry-block-${b.sys.id}`} block={b} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryBlocks;
