// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentPageIntroDetailFields } from './TypeComponentBlockPageIntroDetail';
import { TypeComponentBlockResponsiveFullImageFields } from './TypeComponentBlockResponsiveFullImage';

export interface TypePageCareerFields {
    name: Contentful.EntryFields.Symbol;
    pageIntroDetail: Contentful.Entry<TypeComponentPageIntroDetailFields>;
    heroImage: Contentful.Entry<TypeComponentBlockResponsiveFullImageFields>;
}

export type TypePageCareer = Contentful.Entry<TypePageCareerFields>;
