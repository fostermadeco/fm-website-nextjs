// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentBlockIndustryBlocksFields } from './TypeComponentBlockIndustryBlocks';
import { TypeComponentBlockIconBlockFields } from './TypeComponentIconBlock';

export interface TypeComponentBlockDarkCircleBackgroundFields {
    internalName: Contentful.EntryFields.Symbol;
    block: Contentful.Entry<TypeComponentBlockIconBlockFields | TypeComponentBlockIndustryBlocksFields>;
}

export type TypeComponentBlockDarkCircleBackground = Contentful.Entry<TypeComponentBlockDarkCircleBackgroundFields>;
