// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentClientFields } from './TypeComponentClient';

export interface TypeComponentBlockClientTestimonialFields {
    authorName: Contentful.EntryFields.Symbol;
    authorTitle: Contentful.EntryFields.Symbol;
    quote: Contentful.EntryFields.Symbol;
    client: Contentful.Entry<TypeComponentClientFields>;
}

export type TypeComponentBlockClientTestimonial = Contentful.Entry<TypeComponentBlockClientTestimonialFields>;
