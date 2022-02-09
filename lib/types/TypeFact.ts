import * as Contentful from 'contentful';

export interface TypeFactFields {
    header: Contentful.EntryFields.Symbol;
    fact: Contentful.EntryFields.Text;
}

export type TypeFact = Contentful.Entry<TypeFactFields>;
