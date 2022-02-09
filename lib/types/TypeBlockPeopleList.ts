import * as Contentful from 'contentful';
import { TypePersonFields } from './TypePerson';

export interface TypeBlockPeopleListFields {
    internalName?: Contentful.EntryFields.Symbol;
    people?: Contentful.Entry<TypePersonFields>[];
}

export type TypeBlockPeopleList = Contentful.Entry<TypeBlockPeopleListFields>;
