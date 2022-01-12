// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentCtaButtonFields } from './TypeComponentCtaButton';

export interface TypeComponentBlockSlideshowFields {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    button: Contentful.Entry<TypeComponentCtaButtonFields>;
    // image: Contentful.Asset;
    // title: Contentful.EntryFields.Symbol;
    // text?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    // ctaText: Contentful.EntryFields.Symbol;
    // ctaLink?: Contentful.Entry<TypePageFields>;
}

export type TypeComponentBlockSlideshow = Contentful.Entry<TypeComponentBlockSlideshowFields>;
