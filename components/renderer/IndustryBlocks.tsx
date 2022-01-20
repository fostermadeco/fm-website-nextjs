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
            <a className="text-center text-white h4 group">
                <div
                    key={`industry-block-${block.sys.id}`}
                    className="relative flex items-center justify-center w-full h-60 md:h-96"
                >
                    <Image
                        className="z-0 transition opacity-25 group-hover:opacity-50"
                        src={`https:${block.fields.industry.fields.listImage.fields.media.fields.file.url}`}
                        height={500}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="relative z-10 border-b-in after:bg-white">{block.fields.industry.fields.title}</div>
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
                <div className="mx-6 py-14 md:mx-0">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-white h5 overline">{fields.overline}</h2>
                        <h3 className="text-white h2">{fields.headerText}</h3>
                        <p className="px-8 text-white p-xl">{fields.paragraph}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 my-10 mt-20 md:grid-cols-3 md:gap-6">
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
