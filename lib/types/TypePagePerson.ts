import * as Contentful from 'contentful';
import { TypePersonFields } from './TypePerson';

export interface TypePagePersonFields {
    name?: Contentful.EntryFields.Symbol;
    person: Contentful.Entry<TypePersonFields>;
}

export type TypePagePerson = Contentful.Entry<TypePagePersonFields>;
