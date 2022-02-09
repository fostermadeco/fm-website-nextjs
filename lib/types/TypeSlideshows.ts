import * as Contentful from 'contentful';
import { TypeButtonFields } from './TypeButton';
import { TypeIndustryFields } from './TypeIndustry';
import { TypePageServiceFields } from './TypePageService';
import { TypeTechnologyFields } from './TypeTechnology';

export interface TypeSlideshowsFields {
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Text;
    button?: Contentful.Entry<TypeButtonFields>;
    contentType: 'Case Studies' | 'Journal';
    category?: Contentful.Entry<TypeIndustryFields | TypePageServiceFields | TypeTechnologyFields>;
}

export type TypeSlideshows = Contentful.Entry<TypeSlideshowsFields>;
