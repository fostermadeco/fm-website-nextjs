import * as Contentful from 'contentful';
import { TypeLogoFields } from './TypeLogo';

export interface TypeBlockLogoGridFields {
    internalName: Contentful.EntryFields.Symbol;
    logos: Contentful.Entry<TypeLogoFields>[];
}

export type TypeBlockLogoGrid = Contentful.Entry<TypeBlockLogoGridFields>;
