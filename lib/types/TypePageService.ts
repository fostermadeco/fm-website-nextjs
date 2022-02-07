import * as Contentful from 'contentful';
// eslint-disable-next-line import/no-cycle
import { TypeComponentSections } from './TypeComponentSections';
import { TypeComponentPageIntroDetailFields } from './TypeComponentBlockPageIntroDetail';

export interface TypePageServiceFields {
    name: Contentful.EntryFields.Symbol;
    // service: Contentful.Entry<TypeComponentServiceFields>;
    pageIntroDetail: Contentful.Entry<TypeComponentPageIntroDetailFields>;
    sections: TypeComponentSections;
}

export type TypePageService = Contentful.Entry<TypePageServiceFields>;
