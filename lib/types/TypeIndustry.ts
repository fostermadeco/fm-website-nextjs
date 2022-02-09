import * as Contentful from 'contentful';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypeIndustryFields {
    title: Contentful.EntryFields.Symbol;
    listImage: Contentful.Entry<TypeImageWrapperFields>;
}

export type TypeIndustry = Contentful.Entry<TypeIndustryFields>;
