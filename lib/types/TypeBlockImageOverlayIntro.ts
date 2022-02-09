import * as Contentful from 'contentful';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypeBlockImageOverlayIntroFields {
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Text;
    image: Contentful.Entry<TypeImageWrapperFields>;
}

export type TypeBlockImageOverlayIntro = Contentful.Entry<TypeBlockImageOverlayIntroFields>;
