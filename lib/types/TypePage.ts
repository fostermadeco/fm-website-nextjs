import * as Contentful from 'contentful';
import { TypeSeoFields } from './TypeSeo';
import { TypePageLandingFields } from './TypePageLanding';
import { TypePageIndustryFields } from './TypePageIndustry';
import { TypePageTechnologyFields } from './TypePageTechnology';
import { TypePageCompanyFields } from './TypePageCompany';

export interface TypePageFields {
    title: Contentful.EntryFields.Symbol;
    name: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    content: Contentful.Entry<
        TypePageLandingFields | TypePageIndustryFields | TypePageTechnologyFields | TypePageCompanyFields
    >;
    seo: Contentful.Entry<TypeSeoFields>;
}

export type TypePage = Contentful.Entry<TypePageFields>;
