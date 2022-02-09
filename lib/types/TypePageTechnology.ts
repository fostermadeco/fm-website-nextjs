import * as Contentful from 'contentful';
import { TypeBlockClientTestimonialFields } from './TypeBlockClientTestimonial';
import { TypeBlockCtaBottomFields } from './TypeBlockCtaBottom';
import { TypeBlockDarkCircleBackgroundFields } from './TypeBlockDarkCircleBackground';
import { TypeBlockIconBlocksFields } from './TypeBlockIconBlocks';
import { TypeBlockImageWithPartialOverlayFields } from './TypeBlockImageWithPartialOverlay';
import { TypeBlockPageIntroDetailFields } from './TypeBlockPageIntroDetail';
import { TypeBlockPageSectionFields } from './TypeBlockPageSection';
import { TypeBlockSlideshowFields } from './TypeBlockSlideshow';
import { TypePageFields } from './TypePage';
import { TypeTechnologyFields } from './TypeTechnology';

export interface TypePageTechnologyFields {
    name?: Contentful.EntryFields.Symbol;
    technology?: Contentful.Entry<TypeTechnologyFields>;
    parentPage?: Contentful.Entry<TypePageFields>;
    pageIntroDetail?: Contentful.Entry<TypeBlockPageIntroDetailFields>;
    sections?: Contentful.Entry<
        | TypeBlockCtaBottomFields
        | TypeBlockClientTestimonialFields
        | TypeBlockDarkCircleBackgroundFields
        | TypeBlockIconBlocksFields
        | TypeBlockImageWithPartialOverlayFields
        | TypeBlockPageSectionFields
        | TypeBlockSlideshowFields
    >[];
}

export type TypePageTechnology = Contentful.Entry<TypePageTechnologyFields>;
