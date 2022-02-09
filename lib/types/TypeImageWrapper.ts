import * as Contentful from 'contentful';

export interface TypeImageWrapperFields {
    title?: Contentful.EntryFields.Symbol;
    description?: Contentful.EntryFields.Symbol;
    altText?: Contentful.EntryFields.Symbol;
    media: Contentful.Asset;
}

export type TypeImageWrapper = Contentful.Entry<TypeImageWrapperFields>;
