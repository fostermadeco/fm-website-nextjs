// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentBlockIconBlockFields } from './TypeComponentIconBlock';

export interface TypeComponentBlockIconBlocksFields {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    iconBlocks: Contentful.Entry<TypeComponentBlockIconBlockFields>[];
}

export type TypeComponentBlockIconBlocks = Contentful.Entry<TypeComponentBlockIconBlocksFields>;
