import * as Contentful from 'contentful';
import { TypeComponentPageIntroFields } from './TypeComponentPageIntro';
// eslint-disable-next-line import/no-cycle
import { TypeComponentSections } from './TypeComponentSections';

export interface TypePageLandingFields {
    name: Contentful.EntryFields.Symbol;
    pageIntro: Contentful.Entry<TypeComponentPageIntroFields>;
    sections: TypeComponentSections;
}

export type TypePageLanding = Contentful.Entry<TypePageLandingFields>;
