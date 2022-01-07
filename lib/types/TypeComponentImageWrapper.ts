// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeComponentImageWrapperFields {
    title: Contentful.EntryFields.Symbol;
    description: Contentful.EntryFields.Symbol;
    altText: Contentful.EntryFields.Symbol;
    media: Contentful.Asset;

    // title: Contentful.EntryFields.Symbol;
    // text?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    // ctaText: Contentful.EntryFields.Symbol;
    // ctaLink?: Contentful.Entry<TypePageFields>;
}

export type TypeComponentImageWrapper = Contentful.Entry<TypeComponentImageWrapperFields>;