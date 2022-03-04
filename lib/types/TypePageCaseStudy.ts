import * as Contentful from 'contentful';
import { TypeCaseStudyFields } from './TypeCaseStudy';

export interface TypePageCaseStudyFields {
    name?: Contentful.EntryFields.Symbol;
    caseStudy?: Contentful.Entry<TypeCaseStudyFields>;
}

export type TypePageCaseStudy = Contentful.Entry<TypePageCaseStudyFields>;
