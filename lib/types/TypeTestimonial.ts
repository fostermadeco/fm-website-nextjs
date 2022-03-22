import * as Contentful from 'contentful';
import { TypeClientFields } from './TypeClient';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypeTestimonialFields {
    authorName: Contentful.EntryFields.Symbol;
    authorTitle: Contentful.EntryFields.Symbol;
    client?: Contentful.Entry<TypeClientFields>;
    quote: Contentful.EntryFields.Text;
    quoteShort?: Contentful.EntryFields.Text;
    image?: Contentful.Entry<TypeImageWrapperFields>;
}

export type TypeTestimonial = Contentful.Entry<TypeTestimonialFields>;
