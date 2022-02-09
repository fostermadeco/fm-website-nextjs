import * as Contentful from 'contentful';
import { TypeIndustryFields } from './TypeIndustry';
import { TypePageFields } from './TypePage';

export interface TypeIndustryBlockFields {
    internalName?: Contentful.EntryFields.Symbol;
    industry: Contentful.Entry<TypeIndustryFields>;
    link: Contentful.Entry<TypePageFields>;
}

export type TypeIndustryBlock = Contentful.Entry<TypeIndustryBlockFields>;
