import * as Contentful from 'contentful';
// eslint-disable-next-line import/no-cycle
import { TypeComponentSections } from './TypeComponentSections';
import { TypeComponentBlockSlideshowFields } from './TypeComponentBlockSlideshow';
import { TypeComponentCtaButtonFields } from './TypeComponentCtaButton';
import { TypeComponentTechnologyFields } from './TypeComponentTechnology';

export interface TypePageTechnologyFields {
    name: Contentful.EntryFields.Symbol;
    technology: Contentful.Entry<TypeComponentTechnologyFields>;
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    paragraph: Contentful.EntryFields.Symbol;
    button: Contentful.Entry<TypeComponentCtaButtonFields>;
    sections: TypeComponentSections;
    slideshow: Contentful.Entry<TypeComponentBlockSlideshowFields>;
}

export type TypePageTechnology = Contentful.Entry<TypePageTechnologyFields>;
