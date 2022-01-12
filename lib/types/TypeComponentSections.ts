import * as Contentful from 'contentful';
import { TypeComponentBlockHeaderFields } from './TypeComponentBlockHeader';
import { TypeComponentBlockIconBlocksFields } from './TypeComponentBlockIconBlocks';
import { TypeComponentBlockImageWithPartialOverlayFields } from './TypeComponentBlockImageWithPartialOverlay';
import { TypeComponentBlockIndustryBlocksFields } from './TypeComponentBlockIndustryBlocks';
import { TypeComponentBlockNumberedBlocksFields } from './TypeComponentBlockNumberedBlocks';
import { TypeComponentBlockPageSectionFields } from './TypeComponentBlockPageSection';
import { TypeComponentBlockWideImageFields } from './TypeComponentBlockWideImage';

export type TypeComponentSections = Contentful.Entry<
    | TypeComponentBlockHeaderFields
    | TypeComponentBlockImageWithPartialOverlayFields
    | TypeComponentBlockNumberedBlocksFields
    | TypeComponentBlockPageSectionFields
    | TypeComponentBlockIconBlocksFields
    | TypeComponentBlockIndustryBlocksFields
    | TypeComponentBlockWideImageFields
>[];
