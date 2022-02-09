import * as Contentful from 'contentful';
import { TypeBlockCtaBottomFields } from './TypeBlockCtaBottom';
import { TypeBlockDarkCircleBackgroundFields } from './TypeBlockDarkCircleBackground';
import { TypeBlockHeaderFields } from './TypeBlockHeader';
import { TypeBlockIconBlocksFields } from './TypeBlockIconBlocks';
import { TypeBlockImageOverlayIntroFields } from './TypeBlockImageOverlayIntro';
import { TypeBlockImageWithPartialOverlayFields } from './TypeBlockImageWithPartialOverlay';
import { TypeBlockNumberedBlocksFields } from './TypeBlockNumberedBlocks';
import { TypeBlockPageSectionFields } from './TypeBlockPageSection';
import { TypeBlockSlideshowFields } from './TypeBlockSlideshow';
import { TypeBlockTechnologyBlocksFields } from './TypeBlockTechnologyBlocks';

export interface TypePageLandingFields {
    name?: Contentful.EntryFields.Symbol;
    pageIntro?: Contentful.Entry<TypeBlockImageOverlayIntroFields>;
    sections?: Contentful.Entry<
        | TypeBlockCtaBottomFields
        | TypeBlockDarkCircleBackgroundFields
        | TypeBlockHeaderFields
        | TypeBlockIconBlocksFields
        | TypeBlockImageWithPartialOverlayFields
        | TypeBlockNumberedBlocksFields
        | TypeBlockPageSectionFields
        | TypeBlockSlideshowFields
        | TypeBlockTechnologyBlocksFields
    >[];
}

export type TypePageLanding = Contentful.Entry<TypePageLandingFields>;
