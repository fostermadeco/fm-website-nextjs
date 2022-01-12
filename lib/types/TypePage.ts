import * as Contentful from 'contentful';
import { TypeSeoFields } from './TypeSeo';
import { TypePageLandingFields } from './TypePageLanding';
import { TypePageIndustryFields } from './TypePageIndustry';

export interface TypePageFields {
    title: Contentful.EntryFields.Symbol;
    name: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    content: Contentful.Entry<TypePageLandingFields | TypePageIndustryFields>;
    seo: Contentful.Entry<TypeSeoFields>;
}

export type TypePage = Contentful.Entry<TypePageFields>;
