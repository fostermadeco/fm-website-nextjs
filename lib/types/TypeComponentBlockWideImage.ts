// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentImageWrapperFields } from './TypeComponentImageWrapper';

export interface TypeComponentBlockWideImageFields {
    internalName: Contentful.EntryFields.Symbol;
    image: Contentful.Entry<TypeComponentImageWrapperFields>;
}

export type TypeComponentBlockWideImage = Contentful.Entry<TypeComponentBlockWideImageFields>;
