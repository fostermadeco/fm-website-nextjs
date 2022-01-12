// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeComponentFactFields {
    headerText: Contentful.EntryFields.Symbol;
    fact: Contentful.EntryFields.Symbol;
}

export type TypeComponentFact = Contentful.Entry<TypeComponentFactFields>;
