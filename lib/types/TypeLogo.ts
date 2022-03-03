import * as Contentful from 'contentful';

export interface TypeLogoFields {
    name: Contentful.EntryFields.Symbol;
    logo: Contentful.Asset;
}

export type TypeLogo = Contentful.Entry<TypeLogoFields>;
