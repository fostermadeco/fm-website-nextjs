// import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeComponentCareerList } from './TypeComponentCareerList';

export interface TypeComponentBlockCareerListFields {
    careerList: TypeComponentCareerList;
}

export type TypeComponentBlockCareerList = Contentful.Entry<TypeComponentBlockCareerListFields>;
