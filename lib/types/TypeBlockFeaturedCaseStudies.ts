import * as Contentful from 'contentful';
import { TypeButtonFields } from './TypeButton';
import { TypePageFields } from './TypePage';

export interface TypeBlockFeaturedCaseStudiesFields {
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Symbol;
    caseStudies?: Contentful.Entry<TypePageFields>[];
    button?: Contentful.Entry<TypeButtonFields>;
}

export type TypeBlockFeaturedCaseStudies = Contentful.Entry<TypeBlockFeaturedCaseStudiesFields>;
