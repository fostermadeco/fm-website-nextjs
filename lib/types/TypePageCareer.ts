import * as Contentful from 'contentful';
import { TypeBlockPageIntroDetailFields } from './TypeBlockPageIntroDetail';
import { TypeBlockResponsiveFullImageFields } from './TypeBlockResponsiveFullImage';
import { TypeCtaSimpleFields } from './TypeCtaSimple';

export interface TypePageCareerFields {
    name?: Contentful.EntryFields.Symbol;
    pageIntroDetail?: Contentful.Entry<TypeBlockPageIntroDetailFields>;
    heroImage?: Contentful.Entry<TypeBlockResponsiveFullImageFields>;
    description?: Contentful.EntryFields.Text;
    ctaBottom?: Contentful.Entry<TypeCtaSimpleFields>;
}

export type TypePageCareer = Contentful.Entry<TypePageCareerFields>;
