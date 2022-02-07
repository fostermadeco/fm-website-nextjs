// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypePageFields } from './TypePage';

// circle button
export interface TypeComponentCtaButtonFields {
    buttonText: Contentful.EntryFields.Symbol;
    linkPage: Contentful.Entry<TypePageFields>;
    linkPath: Contentful.EntryFields.Symbol;
}

export type TypeComponentCtaButton = Contentful.Entry<TypeComponentCtaButtonFields>;
