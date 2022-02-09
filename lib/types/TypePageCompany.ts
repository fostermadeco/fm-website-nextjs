import * as Contentful from 'contentful';
import { TypeBlockCareerListFields } from './TypeBlockCareerList';
import { TypeBlockCtaBottomFields } from './TypeBlockCtaBottom';
import { TypeBlockDarkCircleBackgroundFields } from './TypeBlockDarkCircleBackground';
import { TypeBlockImageWithPartialOverlayFields } from './TypeBlockImageWithPartialOverlay';
import { TypeBlockPageIntroDetailFields } from './TypeBlockPageIntroDetail';
import { TypeBlockPageSectionFields } from './TypeBlockPageSection';
import { TypeBlockPeopleListFields } from './TypeBlockPeopleList';
import { TypeBlockSlideshowFields } from './TypeBlockSlideshow';
import { TypePageFields } from './TypePage';

export interface TypePageCompanyFields {
    name?: Contentful.EntryFields.Symbol;
    parentPage?: Contentful.Entry<TypePageFields>;
    pageIntroDetail?: Contentful.Entry<TypeBlockPageIntroDetailFields>;
    sections?: Contentful.Entry<
        | TypeBlockCtaBottomFields
        | TypeBlockCareerListFields
        | TypeBlockDarkCircleBackgroundFields
        | TypeBlockImageWithPartialOverlayFields
        | TypeBlockPageSectionFields
        | TypeBlockPeopleListFields
        | TypeBlockSlideshowFields
    >[];
}

export type TypePageCompany = Contentful.Entry<TypePageCompanyFields>;
