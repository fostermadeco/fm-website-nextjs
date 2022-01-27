import * as Contentful from 'contentful';
// eslint-disable-next-line import/no-cycle
import { TypeComponentSections } from './TypeComponentSections';
import { TypeComponentCtaButtonFields } from './TypeComponentCtaButton';

export interface TypePageServiceFields {
    name: Contentful.EntryFields.Symbol;
    // service: Contentful.Entry<TypeComponentServiceFields>;
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    headerParagraph: Contentful.EntryFields.Symbol;
    button: Contentful.Entry<TypeComponentCtaButtonFields>;
    sections: TypeComponentSections;
}

export type TypePageService = Contentful.Entry<TypePageServiceFields>;
