/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// ^ necessary because block needs to be any
import React from 'react';
import get from 'lodash.get';
import NumberedBlocks from './NumberedBlocks';
import PageIntro from './PageIntro';
import ImageWithPartialOverlay from './ImageWithPartialOverlay';
import PageSection from './PageSection';
import Slideshow from './Slideshow';
import IconBlocks from './IconBlocks';
import IndustryBlocks from './IndustryBlocks';
import TechnologyBlocks from './TechnologyBlocks';
import CtaFullSimple from './CtaFullSimple';
import WideImage from './WideImage';

type BlockRendererProps = {
    block: any;
};

// Map Contentful content type ids from content models to components
const ContentTypeMap = {
    blockNumberedBlocks: NumberedBlocks,
    blockImageOverlayIntro: PageIntro,
    blockImageWithPartialOverlay: ImageWithPartialOverlay,
    blockPageSection: PageSection,
    blockIconBlocks: IconBlocks,
    blockIndustryBlocks: IndustryBlocks,
    blockTechnologyBlocks: TechnologyBlocks,
    slideshows: Slideshow,
    blockCtaFullSimple: CtaFullSimple,
    blockWideImage: WideImage,
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

    const contentTypeId = get(block, 'sys.contentType.sys.id') as string;
    // https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
    const Component = ContentTypeMap[contentTypeId as keyof typeof ContentTypeMap];
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
