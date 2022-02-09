import * as Contentful from 'contentful';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypeBlockImageWithPartialOverlayFields {
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Text;
    image: Contentful.Entry<TypeImageWrapperFields>;
    paragraphText?: Contentful.EntryFields.Text;
}

export type TypeBlockImageWithPartialOverlay = Contentful.Entry<TypeBlockImageWithPartialOverlayFields>;
