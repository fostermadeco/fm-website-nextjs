import * as Contentful from 'contentful';
import { TypeButtonFields } from './TypeButton';

export interface TypeBlockPageIntroDetailFields {
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Symbol;
    headerParagraph?: Contentful.EntryFields.Text;
    button?: Contentful.Entry<TypeButtonFields>;
}

export type TypeBlockPageIntroDetail = Contentful.Entry<TypeBlockPageIntroDetailFields>;
