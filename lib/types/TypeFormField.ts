import * as Contentful from 'contentful';

export interface TypeFormFieldFields {
    label?: Contentful.EntryFields.Symbol;
    placeholder?: Contentful.EntryFields.Symbol;
    value: Contentful.EntryFields.Symbol;
}

export type TypeFormField = Contentful.Entry<TypeFormFieldFields>;
