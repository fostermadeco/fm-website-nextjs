import * as Contentful from 'contentful';
import { TypeBlockClientTestimonialFields } from './TypeBlockClientTestimonial';
import { TypeBlockCtaBottomFields } from './TypeBlockCtaBottom';
import { TypeBlockDarkCircleBackgroundFields } from './TypeBlockDarkCircleBackground';
import { TypeBlockImageWithPartialOverlayFields } from './TypeBlockImageWithPartialOverlay';
import { TypeBlockPageIntroDetailFields } from './TypeBlockPageIntroDetail';
import { TypeBlockPageSectionFields } from './TypeBlockPageSection';
import { TypeBlockSlideshowFields } from './TypeBlockSlideshow';
import { TypeBlockWideImageFields } from './TypeBlockWideImage';
import { TypeIndustryFields } from './TypeIndustry';

export interface TypePageIndustryFields {
    name?: Contentful.EntryFields.Symbol;
    industry?: Contentful.Entry<TypeIndustryFields>;
    pageIntroDetail?: Contentful.Entry<TypeBlockPageIntroDetailFields>;
    sections?: Contentful.Entry<
        | TypeBlockCtaBottomFields
        | TypeBlockClientTestimonialFields
        | TypeBlockDarkCircleBackgroundFields
        | TypeBlockImageWithPartialOverlayFields
        | TypeBlockPageSectionFields
        | TypeBlockSlideshowFields
        | TypeBlockWideImageFields
    >[];
}

export type TypePageIndustry = Contentful.Entry<TypePageIndustryFields>;
