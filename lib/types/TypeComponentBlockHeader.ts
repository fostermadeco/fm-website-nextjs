// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeComponentBlockHeaderFields {
    overline: Contentful.EntryFields.Symbol;
    header: Contentful.EntryFields.Symbol;

    // title: Contentful.EntryFields.Symbol;
    // text?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    // ctaText: Contentful.EntryFields.Symbol;
    // ctaLink?: Contentful.Entry<TypePageFields>;
}

export type TypeComponentBlockHeader = Contentful.Entry<TypeComponentBlockHeaderFields>;
