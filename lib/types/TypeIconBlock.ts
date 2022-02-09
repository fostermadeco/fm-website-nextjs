import * as Contentful from 'contentful';
import { TypeIconFields } from './TypeIcon';
import { TypePageFields } from './TypePage';

export interface TypeIconBlockFields {
    icon: Contentful.Entry<TypeIconFields>;
    headerText?: Contentful.EntryFields.Symbol;
    paragraph?: Contentful.EntryFields.Symbol;
    link?: Contentful.Entry<TypePageFields>;
}

export type TypeIconBlock = Contentful.Entry<TypeIconBlockFields>;
