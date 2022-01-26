// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypePageFields } from './TypePage';

export interface TypeComponentInternalPageLinkFields {
    linkText: Contentful.EntryFields.Symbol;
    linkPage: Contentful.Entry<TypePageFields>;
}

export type TypeComponentInternalPageLink = Contentful.Entry<TypeComponentInternalPageLinkFields>;
