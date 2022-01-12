// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentBlockHeaderFields } from './TypeComponentBlockHeader';
import { TypeComponentImageWrapperFields } from './TypeComponentImageWrapper';

export interface TypeComponentBlockImageWithPartialOverlayFields {
    // header: Contentful.Entry<TypeComponentBlockHeaderFields>;
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    image: Contentful.Entry<TypeComponentImageWrapperFields>;
    paragraphText: Contentful.EntryFields.Symbol;

    // title: Contentful.EntryFields.Symbol;
    // text?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    // ctaText: Contentful.EntryFields.Symbol;
    // ctaLink?: Contentful.Entry<TypePageFields>;
}

export type TypeComponentBlockImageWithPartialOverlay =
    Contentful.Entry<TypeComponentBlockImageWithPartialOverlayFields>;
