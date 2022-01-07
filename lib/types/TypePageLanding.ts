import * as Contentful from 'contentful';
import { TypeComponentPageIntroFields } from './TypeComponentPageIntro';
// eslint-disable-next-line import/no-cycle
import { TypeComponentSections } from './TypeComponentSections';
import { TypeComponentBlockSlideshowFields } from './TypeComponentBlockSlideshow';

export interface TypePageLandingFields {
    name: Contentful.EntryFields.Symbol;
    pageIntro: Contentful.Entry<TypeComponentPageIntroFields>;
    sections: TypeComponentSections;
    slideshow: Contentful.Entry<TypeComponentBlockSlideshowFields>;
}

export type TypePageLanding = Contentful.Entry<TypePageLandingFields>;
