// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentPageIntroDetailFields } from './TypeComponentBlockPageIntroDetail';
import { TypeComponentBlockResponsiveFullImageFields } from './TypeComponentBlockResponsiveFullImage';
import { TypeComponentCtaSimpleFields } from './TypeComponentCtaSimple';

export interface TypePageCareerFields {
    name: Contentful.EntryFields.Symbol;
    pageIntroDetail: Contentful.Entry<TypeComponentPageIntroDetailFields>;
    heroImage: Contentful.Entry<TypeComponentBlockResponsiveFullImageFields>;
    description: Contentful.EntryFields.Symbol;
    ctaBottom: Contentful.Entry<TypeComponentCtaSimpleFields>;
}

export type TypePageCareer = Contentful.Entry<TypePageCareerFields>;
