import * as Contentful from 'contentful';
import { TypeFactFields } from './TypeFact';

export interface TypeBlockNumberedBlocksFields {
    internalTitle?: Contentful.EntryFields.Symbol;
    fact: Contentful.Entry<TypeFactFields>[];
}

export type TypeBlockNumberedBlocks = Contentful.Entry<TypeBlockNumberedBlocksFields>;
