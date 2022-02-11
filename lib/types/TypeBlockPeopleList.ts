import * as Contentful from 'contentful';
import { TypePageFields } from './TypePage';
import { TypePagePersonFields } from './TypePagePerson';
import { TypePersonFields } from './TypePerson';

export interface TypeBlockPeopleListFields {
    internalName?: Contentful.EntryFields.Symbol;
    people: Contentful.Entry<TypePersonFields>[];
    peoplePages?: Contentful.Entry<TypePagePersonFields>[];
    peoplePagesCompose?: Contentful.Entry<TypePageFields>[];
}

export type TypeBlockPeopleList = Contentful.Entry<TypeBlockPeopleListFields>;
