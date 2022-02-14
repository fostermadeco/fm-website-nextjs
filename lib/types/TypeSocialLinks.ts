import * as Contentful from 'contentful';

export interface TypeSocialLinksFields {
    internalName?: Contentful.EntryFields.Symbol;
    links?: Contentful.EntryFields.Symbol[];
}

export type TypeSocialLinks = Contentful.Entry<TypeSocialLinksFields>;
