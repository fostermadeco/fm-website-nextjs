import * as Contentful from 'contentful';
import { TypeImageWrapperFields } from './TypeImageWrapper';
import { TypeInternalPageLinkFields } from './TypeInternalPageLink';
import { TypePageFields } from './TypePage';

export interface TypeBlockPageSectionFields {
    imagePlacement: 'Left' | 'Right';
    image: Contentful.Entry<TypeImageWrapperFields>;
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Text;
    paragraph?: Contentful.EntryFields.Text;
    links?: Contentful.Entry<TypeInternalPageLinkFields>[];
    linkTest?: Contentful.Entry<TypePageFields>;
}

export type TypeBlockPageSection = Contentful.Entry<TypeBlockPageSectionFields>;
