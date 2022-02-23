import * as Contentful from 'contentful';
import { TypeButtonFields } from './TypeButton';

export interface TypeBlockPageIntroSimpleFields {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    button: Contentful.Entry<TypeButtonFields>;
}

export type TypeBlockPageIntroSimple = Contentful.Entry<TypeBlockPageIntroSimpleFields>;
