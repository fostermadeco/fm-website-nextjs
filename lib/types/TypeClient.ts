import * as Contentful from 'contentful';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypeClientFields {
    name?: Contentful.EntryFields.Symbol;
    logo?: Contentful.Entry<TypeImageWrapperFields>;
}

export type TypeClient = Contentful.Entry<TypeClientFields>;
