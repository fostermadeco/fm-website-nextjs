import * as Contentful from 'contentful';

export interface TypeSolutionFields {
    title?: Contentful.EntryFields.Symbol;
}

export type TypeSolution = Contentful.Entry<TypeSolutionFields>;
