import * as Contentful from 'contentful';

export interface TypeBlockHeaderFields {
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Text;
}

export type TypeBlockHeader = Contentful.Entry<TypeBlockHeaderFields>;
