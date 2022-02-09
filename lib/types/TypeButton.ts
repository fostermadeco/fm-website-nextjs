import * as Contentful from 'contentful';
import { TypePageFields } from './TypePage';

export interface TypeButtonFields {
    buttonText?: Contentful.EntryFields.Symbol;
    linkPage?: Contentful.Entry<TypePageFields>;
    linkPath?: Contentful.EntryFields.Symbol;
}

export type TypeButton = Contentful.Entry<TypeButtonFields>;
