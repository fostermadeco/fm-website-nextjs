import * as Contentful from 'contentful';

export interface TypeResourceFields {
    key?: Contentful.EntryFields.Symbol;
    value?: Contentful.EntryFields.Text;
}

export type TypeResource = Contentful.Entry<TypeResourceFields>;
