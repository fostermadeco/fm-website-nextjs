import * as Contentful from 'contentful';
import { TypeBlockCtaBottomFields } from './TypeBlockCtaBottom';
import { TypeBlockFeaturedCaseStudiesFields } from './TypeBlockFeaturedCaseStudies';
import { TypeBlockIconBlocksFields } from './TypeBlockIconBlocks';
import { TypeBlockImageWithPartialOverlayFields } from './TypeBlockImageWithPartialOverlay';
import { TypeBlockNumberedBlocksFields } from './TypeBlockNumberedBlocks';
import { TypeBlockPageIntroDetailFields } from './TypeBlockPageIntroDetail';
import { TypeBlockPageSectionFields } from './TypeBlockPageSection';

export interface TypePageLandingNoImageFields {
    name?: Contentful.EntryFields.Symbol;
    pageIntro?: Contentful.Entry<TypeBlockPageIntroDetailFields>;
    sections?: Contentful.Entry<
        | TypeBlockCtaBottomFields
        | TypeBlockFeaturedCaseStudiesFields
        | TypeBlockIconBlocksFields
        | TypeBlockImageWithPartialOverlayFields
        | TypeBlockNumberedBlocksFields
        | TypeBlockPageSectionFields
    >[];
}

export type TypePageLandingNoImage = Contentful.Entry<TypePageLandingNoImageFields>;
