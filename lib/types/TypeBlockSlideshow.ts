import * as Contentful from 'contentful';
import { TypeSlideshowsFields } from './TypeSlideshows';

export interface TypeBlockSlideshowFields {
    slideshow: Contentful.Entry<TypeSlideshowsFields>;
}

export type TypeBlockSlideshow = Contentful.Entry<TypeBlockSlideshowFields>;
