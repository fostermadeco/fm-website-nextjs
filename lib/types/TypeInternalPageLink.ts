import * as Contentful from 'contentful';
import { TypePageFields } from './TypePage';

export interface TypeInternalPageLinkFields {
    linkText?: Contentful.EntryFields.Symbol;
    linkPage?: Contentful.Entry<TypePageFields>;
}

export type TypeInternalPageLink = Contentful.Entry<TypeInternalPageLinkFields>;
