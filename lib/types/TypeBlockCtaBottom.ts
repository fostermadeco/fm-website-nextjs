import * as Contentful from 'contentful';
import { TypeCtaSimpleFields } from './TypeCtaSimple';

export interface TypeBlockCtaBottomFields {
    cta?: Contentful.Entry<TypeCtaSimpleFields>;
}

export type TypeBlockCtaBottom = Contentful.Entry<TypeBlockCtaBottomFields>;
