/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// ^ necessary because block needs to be any
import React from 'react';
import get from 'lodash.get';
import CareerList from '@components/renderer/CareerList';
import NumberedBlocks from './NumberedBlocks';
import PageIntro from './PageIntro';
import BlockImageWithPartialOverlay from './ImageWithPartialOverlay';
import PageSection from './PageSection';
import Slideshow from './Slideshow';
import IconBlocks from './IconBlocks';
import IndustryBlocks from './IndustryBlocks';
import TechnologyBlocks from './TechnologyBlocks';
import CtaFullSimple from './CtaFullSimple';
import WideImage from './WideImage';
import ClientTestimonial from './ClientTestimonial';
import BlockDarkCircleBackground from './BlockDarkCircleBackground';
import CtaBottom from './CtaBottom';
import ResponsiveFullImage from './ResponsiveFullImage';
import PeopleList from './PeopleList';
import Form from './Form';
import FeaturedCaseStudyList from './FeaturedCaseStudyList';

type BlockRendererProps = {
    block: any;
    mode?: 'dark' | 'light';
};

// Map Contentful content type ids from content models to components
const ContentTypeMap = {
    blockNumberedBlocks: NumberedBlocks,
    blockImageOverlayIntro: PageIntro,
    blockImageWithPartialOverlay: BlockImageWithPartialOverlay,
    blockPageSection: PageSection,
    blockIconBlocks: IconBlocks,
    blockIndustryBlocks: IndustryBlocks,
    blockTechnologyBlocks: TechnologyBlocks,
    blockSlideshow: Slideshow,
    blockCtaBottom: CtaBottom,
    ctaSimple: CtaFullSimple,
    blockWideImage: WideImage,
    blockResponsiveFullImage: ResponsiveFullImage,
    blockClientTestimonial: ClientTestimonial,
    blockDarkCircleBackground: BlockDarkCircleBackground,
    blockCareerList: CareerList,
    blockPeopleList: PeopleList,
    form: Form,
    blockFeaturedCaseStudies: FeaturedCaseStudyList,
};

const BlockRenderer = (props: BlockRendererProps) => {
    const { block, mode = 'light' } = props;
    if (Array.isArray(block)) {
        return (
            <>
                {block.map((b) => (
                    <BlockRenderer key={`block-${b.sys.id}`} block={b} mode={mode} />
                ))}
            </>
        );
    }

    const contentTypeId = get(block, 'sys.contentType.sys.id') as string;
    // https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
    const Component = ContentTypeMap[contentTypeId as keyof typeof ContentTypeMap];

    if (!Component) {
        console.warn(`${contentTypeId} is not handled by the renderer`);
        return null;
    }

    const { id } = block.sys;
    const componentProps = {
        ...block,
        parent: block.parent,
    };

    return <Component key={`${contentTypeId}-${id}`} mode={mode} {...componentProps} />;
};

export default BlockRenderer;
