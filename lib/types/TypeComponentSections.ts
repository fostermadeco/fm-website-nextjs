import * as Contentful from 'contentful';
import { TypeComponentBlockHeaderFields } from './TypeComponentBlockHeader';
import { TypeComponentBlockIconBlocksFields } from './TypeComponentBlockIconBlocks';
import { TypeComponentBlockImageWithPartialOverlayFields } from './TypeComponentBlockImageWithPartialOverlay';
import { TypeComponentBlockNumberedBlocksFields } from './TypeComponentBlockNumberedBlocks';
import { TypeComponentBlockPageSectionFields } from './TypeComponentBlockPageSection';

export type TypeComponentSections = Contentful.Entry<
    | TypeComponentBlockHeaderFields
    | TypeComponentBlockImageWithPartialOverlayFields
    | TypeComponentBlockNumberedBlocksFields
    | TypeComponentBlockPageSectionFields
    | TypeComponentBlockIconBlocksFields
>[];
