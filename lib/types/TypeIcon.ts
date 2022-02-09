import * as Contentful from 'contentful';

export interface TypeIconFields {
    title: Contentful.EntryFields.Symbol;
    iconImage: Contentful.Asset;
}

export type TypeIcon = Contentful.Entry<TypeIconFields>;
