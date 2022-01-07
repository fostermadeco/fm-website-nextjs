// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentImageWrapperFields } from './TypeComponentImageWrapper';

export interface TypeComponentPageIntroFields {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    image: Contentful.Entry<TypeComponentImageWrapperFields>;
    // image: Contentful.Asset;
    // title: Contentful.EntryFields.Symbol;
    // text?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    // ctaText: Contentful.EntryFields.Symbol;
    // ctaLink?: Contentful.Entry<TypePageFields>;
}

export type TypeComponentPageIntro = Contentful.Entry<TypeComponentPageIntroFields>;