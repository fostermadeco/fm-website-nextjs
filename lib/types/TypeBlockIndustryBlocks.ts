import * as Contentful from 'contentful';
import { TypeIndustryBlockFields } from './TypeIndustryBlock';

export interface TypeBlockIndustryBlocksFields {
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Symbol;
    paragraph?: Contentful.EntryFields.Text;
    industryBlocks?: Contentful.Entry<TypeIndustryBlockFields>[];
}

export type TypeBlockIndustryBlocks = Contentful.Entry<TypeBlockIndustryBlocksFields>;
