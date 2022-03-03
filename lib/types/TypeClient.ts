import * as Contentful from 'contentful';
import { TypeLogoFields } from './TypeLogo';

export interface TypeClientFields {
    name?: Contentful.EntryFields.Symbol;
    logo?: Contentful.Entry<TypeLogoFields>;
}

export type TypeClient = Contentful.Entry<TypeClientFields>;
