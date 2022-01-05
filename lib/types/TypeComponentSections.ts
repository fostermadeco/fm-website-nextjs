import * as Contentful from 'contentful';
import { TypeComponentBlockHeader } from './TypeComponentBlockHeader';
import { TypeComponentBlockImageWithPartialOverlayFields } from './TypeComponentBlockImageWithPartialOverlay';
import { TypeComponentBlockNumberedBlocksFields } from './TypeComponentBlockNumberedBlocks';
// eslint-disable-next-line import/no-cycle
import { TypeComponentBlockPageSectionFields } from './TypeComponentBlockPageSection';

export type TypeComponentSections = Contentful.Entry<
    | TypeComponentBlockHeader
    | TypeComponentBlockImageWithPartialOverlayFields
    | TypeComponentBlockNumberedBlocksFields
    | TypeComponentBlockPageSectionFields
>[];
