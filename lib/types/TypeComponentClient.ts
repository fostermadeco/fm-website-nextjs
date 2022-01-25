// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentImageWrapperFields } from './TypeComponentImageWrapper';

export interface TypeComponentClientFields {
    name: Contentful.EntryFields.Symbol;
    logo: Contentful.Entry<TypeComponentImageWrapperFields>;
}

export type TypeComponentClient = Contentful.Entry<TypeComponentClientFields>;
