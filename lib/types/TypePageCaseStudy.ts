import * as Contentful from 'contentful';

export interface TypePageCaseStudyFields {
    name?: Contentful.EntryFields.Symbol;
}

export type TypePageCaseStudy = Contentful.Entry<TypePageCaseStudyFields>;
