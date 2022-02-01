// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypePageFields } from './TypePage';

// circle button
export interface TypeComponentCtaButtonFields {
    buttonText: Contentful.EntryFields.Symbol;
    link: Contentful.Entry<TypePageFields>;
    anchorLink: Contentful.EntryFields.Symbol;
    slugQueryParam: Contentful.EntryFields.Symbol;
    referrerPage: Contentful.Entry<TypePageFields>;
}

export type TypeComponentCtaButton = Contentful.Entry<TypeComponentCtaButtonFields>;
