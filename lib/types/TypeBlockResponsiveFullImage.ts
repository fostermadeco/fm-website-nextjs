import * as Contentful from 'contentful';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypeBlockResponsiveFullImageFields {
    internalName?: Contentful.EntryFields.Symbol;
    image: Contentful.Entry<TypeImageWrapperFields>;
}

export type TypeBlockResponsiveFullImage = Contentful.Entry<TypeBlockResponsiveFullImageFields>;
