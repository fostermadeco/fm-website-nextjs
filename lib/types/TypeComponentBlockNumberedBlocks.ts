// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentFactFields } from './TypeComponentFact';

export interface TypeComponentBlockNumberedBlocksFields {
    internalTitle: Contentful.EntryFields.Symbol;
    fact: Contentful.Entry<TypeComponentFactFields>[];
    // title: Contentful.EntryFields.Symbol;
    // text?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    // ctaText: Contentful.EntryFields.Symbol;
    // ctaLink?: Contentful.Entry<TypePageFields>;
}

export type TypeComponentBlockNumberedBlocks = Contentful.Entry<TypeComponentBlockNumberedBlocksFields>;
