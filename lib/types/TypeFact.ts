import * as Contentful from 'contentful';
import { TypeInternalPageLinkFields } from './TypeInternalPageLink';

export interface TypeFactFields {
    header: Contentful.EntryFields.Symbol;
    fact: Contentful.EntryFields.Text;
    link?: Contentful.Entry<TypeInternalPageLinkFields>;
}

export type TypeFact = Contentful.Entry<TypeFactFields>;
