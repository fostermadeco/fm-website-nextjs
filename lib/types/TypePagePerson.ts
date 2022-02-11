import * as Contentful from 'contentful';
import { TypeImageWrapperFields } from './TypeImageWrapper';
import { TypePersonFields } from './TypePerson';

export interface TypePagePersonFields {
    name?: Contentful.EntryFields.Symbol;
    wideImage?: Contentful.Entry<TypeImageWrapperFields>;
    person: Contentful.Entry<TypePersonFields>;
}

export type TypePagePerson = Contentful.Entry<TypePagePersonFields>;
