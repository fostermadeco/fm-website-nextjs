import * as Contentful from 'contentful';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypeTechnologyFields {
    title: Contentful.EntryFields.Symbol;
    logo: Contentful.Entry<TypeImageWrapperFields>;
}

export type TypeTechnology = Contentful.Entry<TypeTechnologyFields>;
