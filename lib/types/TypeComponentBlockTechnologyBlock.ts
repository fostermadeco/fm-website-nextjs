// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentTechnologyFields } from './TypeComponentTechnology';
import { TypePageFields } from './TypePage';

export interface TypeComponentBlockTechnologyBlockFields {
    internalName: Contentful.EntryFields.Symbol;
    technology: Contentful.Entry<TypeComponentTechnologyFields>;
    link: Contentful.Entry<TypePageFields>;
}

export type TypeComponentBlockTechnologyBlock = Contentful.Entry<TypeComponentBlockTechnologyBlockFields>;
