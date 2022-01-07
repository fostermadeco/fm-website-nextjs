/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import get from 'lodash.get';
import NumberedBlocks from '../NumberedBlocks';
import PageIntro from '../PageIntro';

type BlockRendererProps = {
    block: any;
};

const ContentTypeMap = {
    blockNumberedBlocks: NumberedBlocks,
    blockImageOverlayIntro: PageIntro,
};

const BlockRenderer = ({ block }: BlockRendererProps) => {
    if (Array.isArray(block)) {
        return (
            <>
                {block.map((b) => (
                    <BlockRenderer key={`block-${b.sys.id}`} block={b} />
                ))}
            </>
        );
    }

    const contentTypeId = get(block, 'sys.contentType.sys.id');
    const Component = ContentTypeMap[contentTypeId];
    console.log(contentTypeId);

    if (!Component) {
        console.warn(`${contentTypeId} is not handled by the renderer`);
        return null;
    }

    const { id } = block.sys;
    const componentProps = {
        ...block,
        parent: block.parent,
    };

    console.log({ componentProps });

    return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

export default BlockRenderer;
