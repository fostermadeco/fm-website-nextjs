import * as Contentful from 'contentful';
import { TypeFormFieldFields } from './TypeFormField';

export interface TypeFormFields {
    id: Contentful.EntryFields.Symbol;
    intro?: Contentful.EntryFields.Text;
    fields: Contentful.Entry<TypeFormFieldFields>[];
    successMessage?: Contentful.EntryFields.Text;
    submitButtonText?: Contentful.EntryFields.Symbol;
    formErrorMessage?: Contentful.EntryFields.Text;
}

export type TypeForm = Contentful.Entry<TypeFormFields>;
