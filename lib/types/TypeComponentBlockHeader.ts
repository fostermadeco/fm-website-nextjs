// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeComponentBlockHeaderFields {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
}

export type TypeComponentBlockHeader = Contentful.Entry<TypeComponentBlockHeaderFields>;
