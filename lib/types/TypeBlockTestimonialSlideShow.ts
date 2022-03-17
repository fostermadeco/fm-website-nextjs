import * as Contentful from 'contentful';
import { TypeTestimonialFields } from './TypeTestimonial';

export interface TypeBlockTestimonialSlideShowFields {
    internalName?: Contentful.EntryFields.Symbol;
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Symbol;
    testimonials?: Contentful.Entry<TypeTestimonialFields>[];
}

export type TypeBlockTestimonialSlideShow = Contentful.Entry<TypeBlockTestimonialSlideShowFields>;
