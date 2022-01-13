// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentImageWrapperFields } from '.';

export interface TypeComponentTechnologyFields {
    title: Contentful.EntryFields.Symbol;
    logo: Contentful.Entry<TypeComponentImageWrapperFields>;
}

export type TypeComponentTechnology = Contentful.Entry<TypeComponentTechnologyFields>;
