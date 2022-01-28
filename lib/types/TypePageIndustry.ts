// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
// eslint-disable-next-line import/no-cycle
import { TypeComponentSections } from './TypeComponentSections';
import { TypeComponentPageIntroDetailFields } from './TypeComponentBlockPageIntroDetail';

export interface TypePageIndustryFields {
    name: Contentful.EntryFields.Symbol;
    pageIntroDetail: Contentful.Entry<TypeComponentPageIntroDetailFields>;
    sections: TypeComponentSections;
}

export type TypePageIndustry = Contentful.Entry<TypePageIndustryFields>;
