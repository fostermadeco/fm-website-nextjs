import * as Contentful from 'contentful';
import { TypeComponentImageWrapperFields } from './TypeComponentImageWrapper';

export interface TypeComponentBlockResponsiveFullImageFields {
    internalName: Contentful.EntryFields.Symbol;
    image: Contentful.Entry<TypeComponentImageWrapperFields>;
}

export type TypeComponentBlockResponsiveFullImage = Contentful.Entry<TypeComponentBlockResponsiveFullImageFields>;
