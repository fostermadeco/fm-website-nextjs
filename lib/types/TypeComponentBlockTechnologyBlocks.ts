// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentBlockTechnologyBlockFields } from './TypeComponentBlockTechnologyBlock';

export interface TypeComponentBlockTechnologyBlocksFields {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    paragraph: Contentful.EntryFields.Symbol;
    technologyBlocks: Contentful.Entry<TypeComponentBlockTechnologyBlockFields>[];
}

export type TypeComponentBlockTechnologyBlocks = Contentful.Entry<TypeComponentBlockTechnologyBlocksFields>;
