// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
// eslint-disable-next-line import/no-cycle
import { TypeComponentSections } from './TypeComponentSections';
import { TypeComponentBlockSlideshowFields } from './TypeComponentBlockSlideshow';
import { TypeComponentCtaButtonFields } from './TypeComponentCtaButton';

export interface TypePageIndustryFields {
    name: Contentful.EntryFields.Symbol;
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    headerParagraph: Contentful.EntryFields.Symbol;
    button: Contentful.Entry<TypeComponentCtaButtonFields>;
    sections: TypeComponentSections;
    slideshow: Contentful.Entry<TypeComponentBlockSlideshowFields>;
}

export type TypePageIndustry = Contentful.Entry<TypePageIndustryFields>;
