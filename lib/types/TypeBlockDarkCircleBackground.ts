import * as Contentful from 'contentful';
import { TypeBlockIconBlocksFields } from './TypeBlockIconBlocks';
import { TypeBlockIndustryBlocksFields } from './TypeBlockIndustryBlocks';

export interface TypeBlockDarkCircleBackgroundFields {
    internalName?: Contentful.EntryFields.Symbol;
    block?: Contentful.Entry<TypeBlockIconBlocksFields | TypeBlockIndustryBlocksFields>;
}

export type TypeBlockDarkCircleBackground = Contentful.Entry<TypeBlockDarkCircleBackgroundFields>;
