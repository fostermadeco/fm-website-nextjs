// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentImageWrapperFields } from '.';

export interface TypeComponentIndustryFields {
    title: Contentful.EntryFields.Symbol;
    listImage: Contentful.Entry<TypeComponentImageWrapperFields>;
}

export type TypeComponentIndustryWrapper = Contentful.Entry<TypeComponentIndustryFields>;
