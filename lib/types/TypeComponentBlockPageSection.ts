// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentBlockHeaderFields } from './TypeComponentBlockHeader';
import { TypeComponentImageWrapperFields } from './TypeComponentImageWrapper';
// eslint-disable-next-line import/no-cycle
import { TypePageFields } from './TypePage';

export interface TypeComponentBlockPageSectionFields {
    image: Contentful.Entry<TypeComponentImageWrapperFields>;
    header: Contentful.Entry<TypeComponentBlockHeaderFields>;
    paragraph: Contentful.EntryFields.Symbol;
    linkText: Contentful.EntryFields.Symbol;
    link: Contentful.Entry<TypePageFields>;
    // text?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    // ctaText: Contentful.EntryFields.Symbol;
    // ctaLink?: Contentful.Entry<TypePageFields>;
}

export type TypeComponentBlockPageSection = Contentful.Entry<TypeComponentBlockPageSectionFields>;
