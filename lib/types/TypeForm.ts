import * as Contentful from 'contentful';
import { TypeFormFieldFields } from './TypeFormField';
import { TypeResourceSetFields } from './TypeResourceSet';

export interface TypeFormFields {
    id: Contentful.EntryFields.Symbol;
    intro?: Contentful.EntryFields.Text;
    fields?: Contentful.Entry<TypeFormFieldFields>[];
    successMessage?: Contentful.EntryFields.Text;
    submitButtonText?: Contentful.EntryFields.Symbol;
    resources?: Contentful.Entry<TypeResourceSetFields>[];
}

export type TypeForm = Contentful.Entry<TypeFormFields>;
