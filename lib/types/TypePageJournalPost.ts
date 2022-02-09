import * as Contentful from 'contentful';

export interface TypePageJournalPostFields {
    name?: Contentful.EntryFields.Symbol;
}

export type TypePageJournalPost = Contentful.Entry<TypePageJournalPostFields>;
