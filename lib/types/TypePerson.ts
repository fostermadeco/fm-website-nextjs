import * as Contentful from 'contentful';
import { TypeFactFields } from './TypeFact';
import { TypeImageWrapperFields } from './TypeImageWrapper';

export interface TypePersonFields {
    profileImage: Contentful.Entry<TypeImageWrapperFields>;
    firstName: Contentful.EntryFields.Symbol;
    lastName: Contentful.EntryFields.Symbol;
    email?: Contentful.EntryFields.Symbol;
    jobTitle: Contentful.EntryFields.Symbol;
    atAGlance?: Contentful.EntryFields.Text;
    bio?: Contentful.EntryFields.Text;
    atFosterMade?: Contentful.EntryFields.Text;
    expertise?: Contentful.EntryFields.Symbol[];
    beyondIntroductions?: Contentful.EntryFields.Text;
    funFacts?: Contentful.Entry<TypeFactFields>[];
    testimonial?: Contentful.EntryFields.Text;
    socialLinks?: Contentful.EntryFields.Symbol[];
}

export type TypePerson = Contentful.Entry<TypePersonFields>;
