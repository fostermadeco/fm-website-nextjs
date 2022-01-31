// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeComponentCareerListFields {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
}

export type TypeComponentCareerList = Contentful.Entry<TypeComponentCareerListFields>;
