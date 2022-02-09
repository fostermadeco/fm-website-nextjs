import * as Contentful from 'contentful';
import { TypeClientFields } from './TypeClient';

export interface TypeBlockClientTestimonialFields {
    authorName?: Contentful.EntryFields.Symbol;
    authorTitle?: Contentful.EntryFields.Symbol;
    quote?: Contentful.EntryFields.Text;
    client?: Contentful.Entry<TypeClientFields>;
}

export type TypeBlockClientTestimonial = Contentful.Entry<TypeBlockClientTestimonialFields>;
