import * as Contentful from 'contentful';

export interface TypeServiceFields {
    title?: Contentful.EntryFields.Symbol;
}

export type TypeService = Contentful.Entry<TypeServiceFields>;
