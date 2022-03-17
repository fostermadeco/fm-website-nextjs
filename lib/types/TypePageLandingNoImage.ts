import * as Contentful from 'contentful';
import { TypeBlockCtaBottomFields } from './TypeBlockCtaBottom';
import { TypeBlockFeaturedCaseStudiesFields } from './TypeBlockFeaturedCaseStudies';
import { TypeBlockIconBlocksFields } from './TypeBlockIconBlocks';
import { TypeBlockImageWithPartialOverlayFields } from './TypeBlockImageWithPartialOverlay';
import { TypeBlockLogoGridFields } from './TypeBlockLogoGrid';
import { TypeBlockNumberedBlocksFields } from './TypeBlockNumberedBlocks';
import { TypeBlockPageIntroDetailFields } from './TypeBlockPageIntroDetail';
import { TypeBlockPageSectionFields } from './TypeBlockPageSection';
import { TypeBlockTestimonialSlideShowFields } from './TypeBlockTestimonialSlideShow';

export interface TypePageLandingNoImageFields {
    name?: Contentful.EntryFields.Symbol;
    pageIntro?: Contentful.Entry<TypeBlockPageIntroDetailFields>;
    sections?: Contentful.Entry<
        | TypeBlockCtaBottomFields
        | TypeBlockFeaturedCaseStudiesFields
        | TypeBlockIconBlocksFields
        | TypeBlockImageWithPartialOverlayFields
        | TypeBlockLogoGridFields
        | TypeBlockNumberedBlocksFields
        | TypeBlockPageSectionFields
        | TypeBlockTestimonialSlideShowFields
    >[];
}

export type TypePageLandingNoImage = Contentful.Entry<TypePageLandingNoImageFields>;
