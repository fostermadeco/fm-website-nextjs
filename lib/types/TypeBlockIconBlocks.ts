import * as Contentful from 'contentful';
import { TypeIconBlockFields } from './TypeIconBlock';

export interface TypeBlockIconBlocksFields {
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Text;
    paragraph?: Contentful.EntryFields.Text;
    iconBlocks: Contentful.Entry<TypeIconBlockFields>[];
}

export type TypeBlockIconBlocks = Contentful.Entry<TypeBlockIconBlocksFields>;
