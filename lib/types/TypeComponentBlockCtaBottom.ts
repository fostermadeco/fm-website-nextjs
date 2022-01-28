// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentCtaSimpleFields } from './TypeComponentCtaSimple';

export interface TypeComponentBlockCtaBottomFields {
    cta: Contentful.Entry<TypeComponentCtaSimpleFields>;
}

export type TypeComponentBlockCtaBottom = Contentful.Entry<TypeComponentBlockCtaBottomFields>;
