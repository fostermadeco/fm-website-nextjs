import * as Contentful from 'contentful';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypeBlockWideImageFields {
    internalTitle?: Contentful.EntryFields.Symbol;
    image: Contentful.Entry<TypeImageWrapperFields>;
}

export type TypeBlockWideImage = Contentful.Entry<TypeBlockWideImageFields>;
