import * as Contentful from 'contentful';
import { TypeBlockPageIntroSimpleFields } from './TypeBlockPageIntroSimple';
import { TypeFormFields } from './TypeForm';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypePageContactFields {
    name?: Contentful.EntryFields.Symbol;
    pageIntro: Contentful.Entry<TypeBlockPageIntroSimpleFields>;
    heroImage: Contentful.Entry<TypeImageWrapperFields>;
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    form: Contentful.Entry<TypeFormFields>;
    socialLinks?: Contentful.EntryFields.Symbol[];
}

export type TypePageContact = Contentful.Entry<TypePageContactFields>;
