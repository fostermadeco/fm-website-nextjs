import * as Contentful from 'contentful';
import { TypeBlockClientTestimonialFields } from './TypeBlockClientTestimonial';
import { TypeBlockCtaBottomFields } from './TypeBlockCtaBottom';
import { TypeBlockIconBlocksFields } from './TypeBlockIconBlocks';
import { TypeBlockImageWithPartialOverlayFields } from './TypeBlockImageWithPartialOverlay';
import { TypeBlockPageIntroDetailFields } from './TypeBlockPageIntroDetail';
import { TypeBlockPageSectionFields } from './TypeBlockPageSection';
import { TypeBlockSlideshowFields } from './TypeBlockSlideshow';
import { TypeBlockWideImageFields } from './TypeBlockWideImage';
import { TypePageFields } from './TypePage';

export interface TypePageServiceFields {
    name?: Contentful.EntryFields.Symbol;
    parentPage?: Contentful.Entry<TypePageFields>;
    pageIntroDetail?: Contentful.Entry<TypeBlockPageIntroDetailFields>;
    sections?: Contentful.Entry<
        | TypeBlockCtaBottomFields
        | TypeBlockClientTestimonialFields
        | TypeBlockIconBlocksFields
        | TypeBlockImageWithPartialOverlayFields
        | TypeBlockPageSectionFields
        | TypeBlockSlideshowFields
        | TypeBlockWideImageFields
    >[];
}

export type TypePageService = Contentful.Entry<TypePageServiceFields>;
