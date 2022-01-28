// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
// eslint-disable-next-line import/no-cycle
import { TypeComponentSections } from './TypeComponentSections';
import { TypeComponentPageIntroDetailFields } from './TypeComponentBlockPageIntroDetail';
import { TypePageFields } from './TypePage';

export interface TypePageCompanyFields {
    name: Contentful.EntryFields.Symbol;
    pageIntroDetail: Contentful.Entry<TypeComponentPageIntroDetailFields>;
    sections: TypeComponentSections;
    parentPage: Contentful.Entry<TypePageFields>;
}

export type TypePageCompany = Contentful.Entry<TypePageCompanyFields>;
