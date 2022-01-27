import * as Contentful from 'contentful';

export interface TypeComponentImageRichTextFields {
    title?: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
}

export type TypeComponentImageRichText = Contentful.Entry<TypeComponentImageRichTextFields>;
