import * as Contentful from 'contentful';
import { TypeTechnologyBlockFields } from './TypeTechnologyBlock';

export interface TypeBlockTechnologyBlocksFields {
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Symbol;
    paragraph?: Contentful.EntryFields.Text;
    technologyBlocks: Contentful.Entry<TypeTechnologyBlockFields>[];
}

export type TypeBlockTechnologyBlocks = Contentful.Entry<TypeBlockTechnologyBlocksFields>;
