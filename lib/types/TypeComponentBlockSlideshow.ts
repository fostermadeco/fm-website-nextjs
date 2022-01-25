// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentSlideshowFields } from './TypeComponentSlideshow';

export interface TypeComponentBlockSlideshowFields {
    slideshow: Contentful.Entry<TypeComponentSlideshowFields>;
}

export type TypeComponentBlockSlideshow = Contentful.Entry<TypeComponentBlockSlideshowFields>;
