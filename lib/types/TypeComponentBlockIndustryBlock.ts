// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentIndustryFields } from './TypeComponentIndustry';
import { TypePageFields } from './TypePage';

export interface TypeComponentBlockIndustryBlockFields {
    internalName: Contentful.EntryFields.Symbol;
    industry: Contentful.Entry<TypeComponentIndustryFields>;
    link: Contentful.Entry<TypePageFields>;
}

export type TypeComponentBlockIndustryBlock = Contentful.Entry<TypeComponentBlockIndustryBlockFields>;
