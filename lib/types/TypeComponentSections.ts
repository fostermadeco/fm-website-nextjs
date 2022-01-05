import * as Contentful from 'contentful';
import { TypeComponentBlockHeaderFields } from './TypeComponentBlockHeader';
import { TypeComponentBlockImageWithPartialOverlayFields } from './TypeComponentBlockImageWithPartialOverlay';
import { TypeComponentBlockNumberedBlocksFields } from './TypeComponentBlockNumberedBlocks';
// eslint-disable-next-line import/no-cycle
import { TypeComponentBlockPageSectionFields } from './TypeComponentBlockPageSection';

export type TypeComponentSections = Contentful.Entry<
    | TypeComponentBlockHeaderFields
    | TypeComponentBlockImageWithPartialOverlayFields
    | TypeComponentBlockNumberedBlocksFields
    | TypeComponentBlockPageSectionFields
>[];
