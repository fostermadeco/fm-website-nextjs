import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeBlockIndustryBlocksFields, TypeIndustryBlock } from '@types';
import HeaderGroup from '@components/HeaderGroup';

type IndustryBlockProps = {
    block: TypeIndustryBlock;
};

const IndustryBlock = (props: IndustryBlockProps) => {
    const { block } = props;
    console.log({ block });

    if (!block || !block.fields.link) return null;

    return (
        <Link href={`/services/industry/${block.fields.link.fields.slug}`}>
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

const IndustryBlocks = ({ fields }: { fields: TypeBlockIndustryBlocksFields }) => {
    console.log('IndustryBlocks', { fields });
    if (!fields || !fields.industryBlocks) return null;

    const { overline, headerText, paragraph } = fields;

    return (
        <div className="">
            <div className="mx-6 py-14 md:mx-0">
                <HeaderGroup mode="dark" overline={overline} headerText={headerText} paragraph={paragraph} />

                <div className="grid grid-cols-1 gap-6 my-10 mt-20 md:grid-cols-3 md:gap-6">
                    {fields.industryBlocks.map((b) => (
                        <IndustryBlock key={`industry-block-${b.sys.id}`} block={b} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustryBlocks;
