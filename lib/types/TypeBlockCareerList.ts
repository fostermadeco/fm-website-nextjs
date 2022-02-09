import * as Contentful from 'contentful';
import { TypeCareerListFields } from './TypeCareerList';

export interface TypeBlockCareerListFields {
    careerList?: Contentful.Entry<TypeCareerListFields>;
}

export type TypeBlockCareerList = Contentful.Entry<TypeBlockCareerListFields>;
