import * as Contentful from 'contentful';
import { TypeTestimonialFields } from './TypeTestimonial';

export interface TypeBlockClientTestimonialFields {
    internalName?: Contentful.EntryFields.Symbol;
    testimonial: Contentful.Entry<TypeTestimonialFields>;
}

export type TypeBlockClientTestimonial = Contentful.Entry<TypeBlockClientTestimonialFields>;
