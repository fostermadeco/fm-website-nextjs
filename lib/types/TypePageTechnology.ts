import * as Contentful from 'contentful';
// eslint-disable-next-line import/no-cycle
import { TypeComponentSections } from './TypeComponentSections';
import { TypeComponentTechnologyFields } from './TypeComponentTechnology';
import { TypeComponentPageIntroDetailFields } from './TypeComponentBlockPageIntroDetail';
import { TypePageFields } from './TypePage';

export interface TypePageTechnologyFields {
    name: Contentful.EntryFields.Symbol;
    technology: Contentful.Entry<TypeComponentTechnologyFields>;
    pageIntroDetail: Contentful.Entry<TypeComponentPageIntroDetailFields>;
    sections: TypeComponentSections;
}

export type TypePageTechnology = Contentful.Entry<TypePageTechnologyFields>;
