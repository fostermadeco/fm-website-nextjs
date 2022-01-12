// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentBlockIndustryBlockFields } from './TypeComponentBlockIndustryBlock';

export interface TypeComponentBlockIndustryBlocksFields {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    paragraph: Contentful.EntryFields.Symbol;
    industryBlocks: Contentful.Entry<TypeComponentBlockIndustryBlockFields>[];
}

export type TypeComponentBlockIndustryBlocks = Contentful.Entry<TypeComponentBlockIndustryBlocksFields>;
