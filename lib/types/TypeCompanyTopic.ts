import * as Contentful from 'contentful';

export interface TypeCompanyTopicFields {
    name?: Contentful.EntryFields.Symbol;
}

export type TypeCompanyTopic = Contentful.Entry<TypeCompanyTopicFields>;
