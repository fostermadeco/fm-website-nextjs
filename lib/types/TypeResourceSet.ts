import * as Contentful from 'contentful';
import { TypeResourceFields } from './TypeResource';

export interface TypeResourceSetFields {
    internalName?: Contentful.EntryFields.Symbol;
    resources?: Contentful.Entry<TypeResourceFields>[];
}

export type TypeResourceSet = Contentful.Entry<TypeResourceSetFields>;
