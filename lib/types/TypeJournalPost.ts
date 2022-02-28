import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeCompanyTopicFields } from './TypeCompanyTopic';
import { TypeImageWrapperFields } from './TypeImageWrapper';
import { TypePersonFields } from './TypePerson';
import { TypeServiceFields } from './TypeService';
import { TypeSolutionFields } from './TypeSolution';
import { TypeTechnologyFields } from './TypeTechnology';

export interface TypeJournalPostFields {
    publishDate?: Contentful.EntryFields.Date;
    image?: Contentful.Entry<TypeImageWrapperFields>;
    author?: Contentful.Entry<TypePersonFields>;
    summary?: Contentful.EntryFields.Symbol;
    body?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    technologies?: Contentful.Entry<TypeTechnologyFields>[];
    solutions?: Contentful.Entry<TypeSolutionFields>[];
    services?: Contentful.Entry<TypeServiceFields>[];
    companyTopics?: Contentful.Entry<TypeCompanyTopicFields>[];
}

export type TypeJournalPost = Contentful.Entry<TypeJournalPostFields>;
