// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypePageJobFields {
    name: Contentful.EntryFields.Symbol;
}

export type TypePageJob = Contentful.Entry<TypePageJobFields>;
