import * as Contentful from 'contentful';
import { TypePageFields } from './TypePage';
import { TypeTechnologyFields } from './TypeTechnology';

export interface TypeTechnologyBlockFields {
    internalTitle?: Contentful.EntryFields.Symbol;
    technology: Contentful.Entry<TypeTechnologyFields>;
    link?: Contentful.Entry<TypePageFields>;
}

export type TypeTechnologyBlock = Contentful.Entry<TypeTechnologyBlockFields>;
