// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeComponentIconFields {
    title: Contentful.EntryFields.Symbol;
    iconImage: Contentful.Asset;
}

export type TypeComponentIconWrapper = Contentful.Entry<TypeComponentIconFields>;
