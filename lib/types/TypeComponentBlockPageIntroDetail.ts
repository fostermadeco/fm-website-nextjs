// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentCtaButtonFields } from './TypeComponentCtaButton';
import { TypePageFields } from './TypePage';

export interface TypeComponentPageIntroDetailFields {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    headerParagraph: Contentful.EntryFields.Symbol;
    button: Contentful.Entry<TypeComponentCtaButtonFields>;
    backLink: Contentful.Entry<TypePageFields>;
}

export type TypeComponentPageIntroDetail = Contentful.Entry<TypeComponentPageIntroDetailFields>;
