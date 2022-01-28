// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentCtaButtonFields } from './TypeComponentCtaButton';

export interface TypeComponentPageIntroDetailFields {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    headerParagraph: Contentful.EntryFields.Symbol;
    button: Contentful.Entry<TypeComponentCtaButtonFields>;
}

export type TypeComponentPageIntroDetail = Contentful.Entry<TypeComponentPageIntroDetailFields>;
