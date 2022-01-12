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

    return (
        <div
            key={`industry-block-${block.sys.id}`}
            className="relative w-full flex items-center justify-center"
            style={{ height: '500px' }}
        >
            <Image
                className="z-0"
                src={`https:${block.fields.industry.fields.listImage.fields.media.fields.file.url}`}
                height={500}
                layout="fill"
                objectFit="cover"
            />
            <div className="z-10 relative">
                <h4 className="h4 text-center text-white">{block.fields.industry.fields.title}</h4>
                {block.fields.link && (
                    <Link href={block.fields.link.fields.slug}>
                        <a className="h5 mt-4 inline-block">&mdash; Read More</a>
                    </Link>
                )}
            </div>
        </div>
    );
};

const IndustryBlocks = ({ fields }: { fields: TypeComponentBlockIndustryBlocksFields }) => {
    console.log('IndustryBlocks', { fields });
    if (!fields) return null;

    return (
        <div style={{ position: 'relative' }}>
            <div className="container mx-auto">
                <div className="my-14 mx-6 md:mx-0">
                    <div className="text-center">
                        <h2 className="h5 overline">{fields.overline}</h2>
                        <h3 className="h3">{fields.headerText}</h3>
                        <p className="p-xl">{fields.paragraph}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-6 my-10">
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
