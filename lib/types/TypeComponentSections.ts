import * as Contentful from 'contentful';
import { TypeComponentBlockHeaderFields } from './TypeComponentBlockHeader';
import { TypeComponentBlockIconBlocksFields } from './TypeComponentBlockIconBlocks';
import { TypeComponentBlockImageWithPartialOverlayFields } from './TypeComponentBlockImageWithPartialOverlay';
import { TypeComponentBlockIndustryBlocksFields } from './TypeComponentBlockIndustryBlocks';
import { TypeComponentBlockNumberedBlocksFields } from './TypeComponentBlockNumberedBlocks';
import { TypeComponentBlockPageSectionFields } from './TypeComponentBlockPageSection';
import { TypeComponentBlockTechnologyBlocksFields } from './TypeComponentBlockTechnologyBlocks';
import { TypeComponentBlockWideImageFields } from './TypeComponentBlockWideImage';
import { TypeComponentBlockCtaBottomFields } from './TypeComponentBlockCtaBottom';
import { TypeComponentBlockClientTestimonialFields } from './TypeComponentBlockClientTestimonial';
import { TypeComponentBlockSlideshowFields } from './TypeComponentBlockSlideshow';
import { TypeComponentBlockDarkCircleBackgroundFields } from './TypeComponentBlockDarkCircleBackground';

export type TypeComponentSections = Contentful.Entry<
    | TypeComponentBlockHeaderFields
    | TypeComponentBlockImageWithPartialOverlayFields
    | TypeComponentBlockNumberedBlocksFields
    | TypeComponentBlockPageSectionFields
    | TypeComponentBlockIconBlocksFields
    | TypeComponentBlockIndustryBlocksFields
    | TypeComponentBlockWideImageFields
    | TypeComponentBlockTechnologyBlocksFields
    | TypeComponentBlockCtaBottomFields
    | TypeComponentBlockClientTestimonialFields
    | TypeComponentBlockSlideshowFields
    | TypeComponentBlockDarkCircleBackgroundFields
>[];
