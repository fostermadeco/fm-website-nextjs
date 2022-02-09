import * as Contentful from 'contentful';

export interface TypeCareerListFields {
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Symbol;
}

export type TypeCareerList = Contentful.Entry<TypeCareerListFields>;
