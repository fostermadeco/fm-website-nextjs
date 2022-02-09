import * as Contentful from 'contentful';
import { TypeButtonFields } from './TypeButton';

export interface TypeCtaSimpleFields {
    headerText?: Contentful.EntryFields.Symbol;
    button?: Contentful.Entry<TypeButtonFields>;
}

export type TypeCtaSimple = Contentful.Entry<TypeCtaSimpleFields>;
