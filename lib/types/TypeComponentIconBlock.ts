// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentIconFields } from './TypeComponentIcon';
// eslint-disable-next-line import/no-cycle
import { TypePageFields } from './TypePage';

export interface TypeComponentBlockIconBlockFields {
    icon: Contentful.Entry<TypeComponentIconFields>;
    headerText: Contentful.EntryFields.Symbol;
    paragraph: Contentful.EntryFields.Symbol;
    link: Contentful.Entry<TypePageFields>;
}

export type TypeComponentBlockIconBlock = Contentful.Entry<TypeComponentBlockIconBlockFields>;
