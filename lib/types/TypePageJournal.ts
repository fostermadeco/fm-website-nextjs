import * as Contentful from 'contentful';
import { TypeJournalPostFields } from './TypeJournalPost';

export interface TypePageJournalFields {
    name?: Contentful.EntryFields.Symbol;
    journalPost?: Contentful.Entry<TypeJournalPostFields>;
}

export type TypePageJournal = Contentful.Entry<TypePageJournalFields>;
