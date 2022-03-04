import * as Contentful from 'contentful';
import { TypeClientFields } from './TypeClient';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypeCaseStudyFields {
    client: Contentful.Entry<TypeClientFields>;
    summary?: Contentful.EntryFields.Symbol;
    heroImage?: Contentful.Entry<TypeImageWrapperFields>;
}

export type TypeCaseStudy = Contentful.Entry<TypeCaseStudyFields>;
