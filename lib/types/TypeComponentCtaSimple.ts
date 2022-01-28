// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentCtaButtonFields } from './TypeComponentCtaButton';

export interface TypeComponentCtaSimpleFields {
    headerText: Contentful.EntryFields.Symbol;
    button: Contentful.Entry<TypeComponentCtaButtonFields>;
}

export type TypeComponentCtaSimple = Contentful.Entry<TypeComponentCtaSimpleFields>;
