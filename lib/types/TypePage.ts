import * as Contentful from 'contentful';
import { TypePageCareerFields } from './TypePageCareer';
import { TypePageCompanyFields } from './TypePageCompany';
import { TypePageContactFields } from './TypePageContact';
import { TypePageIndustryFields } from './TypePageIndustry';
import { TypePageLandingFields } from './TypePageLanding';
import { TypePageLandingNoImageFields } from './TypePageLandingNoImage';
import { TypePagePersonFields } from './TypePagePerson';
import { TypePageServiceFields } from './TypePageService';
import { TypePageTechnologyFields } from './TypePageTechnology';
import { TypeSeoFields } from './TypeSeo';

export interface TypePageFields {
    name: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    seo?: Contentful.Entry<TypeSeoFields>;
    content: Contentful.Entry<
        | TypePageCareerFields
        | TypePageCompanyFields
        | TypePageContactFields
        | TypePageIndustryFields
        | TypePageLandingNoImageFields
        | TypePageLandingFields
        | TypePagePersonFields
        | TypePageServiceFields
        | TypePageTechnologyFields
    >;
}

export type TypePage = Contentful.Entry<TypePageFields>;
