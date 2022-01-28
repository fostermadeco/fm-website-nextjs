import * as Contentful from 'contentful';
// eslint-disable-next-line import/no-cycle
import { TypeComponentSections } from './TypeComponentSections';
import { TypeComponentBlockSlideshowFields } from './TypeComponentBlockSlideshow';
import { TypeComponentTechnologyFields } from './TypeComponentTechnology';
import { TypeComponentPageIntroDetailFields } from './TypeComponentBlockPageIntroDetail';

export interface TypePageTechnologyFields {
    name: Contentful.EntryFields.Symbol;
    technology: Contentful.Entry<TypeComponentTechnologyFields>;
    pageIntroDetail: Contentful.Entry<TypeComponentPageIntroDetailFields>;
    sections: TypeComponentSections;
    slideshow: Contentful.Entry<TypeComponentBlockSlideshowFields>;
}

export type TypePageTechnology = Contentful.Entry<TypePageTechnologyFields>;
