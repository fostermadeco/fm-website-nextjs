import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { TypeFormFieldFields, TypeFormFields } from '@types';
import * as Yup from 'yup';
import * as Contentful from 'contentful';

import { getErrorMessage } from 'lib/errors';
import FieldInput from './FieldInput';
import FieldSelect from './FieldSelect';
import FieldTextarea from './FieldTextarea';
import FocusError from './FocusError';
import TextMarkdown from './TextMarkdown';
import FieldCheckbox from './FieldCheckbox';

interface ContactFormValues {
    name: string;
    email: string;
    organization: string;
    phone: string;
    budgetRange: string;
    projectDescription: string;
    newsletterSignup: boolean;
}

const budgetOptions = ['<25k', '2k - 100k', '100k - 499k', '500k', 'Not sure yet'];

const validationSchema = Yup.object({
    name: Yup.string().required('What is your name.'),
    email: Yup.string().email('Give us a valid email.').required('Let us know your email.'),
    organization: Yup.string().required('Which company are you affiliated with?'),
    phone: Yup.string().required(`We'd like to give you a call.`),
    budgetRange: Yup.string().required('What is your budget range?'),
    projectDescription: Yup.string().required('We want to know more!'),
});

const encode = (data: { [x: string]: string | number | boolean }) =>
    Object.keys(data)
        .map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');

type GroupsType =
    | Record<string, never>
    | {
          [key: string]: Contentful.Entry<TypeFormFieldFields>;
      };

const groupByValue = (formFields: Contentful.Entry<TypeFormFieldFields>[]): GroupsType => {
    const groups: GroupsType = {};
    for (const [key, value] of Object.entries(formFields)) {
        const newKey = value.fields.value;
        groups[newKey] = value;
    }
    return groups;
};

const FormContact = ({ form }: { form: TypeFormFields }) => {
    const { fields: formFields, formErrorMessage, successMessage, submitButtonText, id, intro } = form;

    const fieldsByValue = groupByValue(formFields);
    const [hasSuccess, setHasSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const initialValues: ContactFormValues = {
        name: '',
        email: '',
        organization: '',
        phone: '',
        budgetRange: '',
        projectDescription: '',
        newsletterSignup: false,
    };

    const handleSubmit = async (values: ContactFormValues, formikHelpers: FormikHelpers<ContactFormValues>) => {
        const { setSubmitting } = formikHelpers;
        console.log({ values });

        const body = encode({ 'form-name': 'contact', ...values, docs: '' });

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body,
            });
            setSubmitting(false);
            setSubmitError(null);
            setHasSuccess(true);
            window.scrollTo(0, 0);
        } catch (e) {
            console.log(e);
            setSubmitError(getErrorMessage(e));
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form noValidate id={id} method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value={id} />
                    {intro && !hasSuccess && (
                        <div className="mb-6">
                            <TextMarkdown text={intro} />
                        </div>
                    )}
                    {submitError && (
                        <div className=" bg-poppy">
                            <p className="px-4 py-4 text-white p-xl">{formErrorMessage}</p>
                        </div>
                    )}
                    {hasSuccess && (
                        <div className="mb-20 bg-black">
                            <p className="px-4 py-6 p-xl text-lime">{successMessage}</p>
                        </div>
                    )}
                    {!hasSuccess && (
                        <div>
                            <FocusError />
                            <FieldInput
                                label={fieldsByValue.name.fields.label}
                                name="name"
                                type="text"
                                placeholder={fieldsByValue.name.fields.placeholder}
                                required
                            />
                            <FieldInput
                                label={fieldsByValue.email.fields.label}
                                name="email"
                                type="text"
                                placeholder={fieldsByValue.email.fields.placeholder}
                                required
                            />
                            <FieldInput
                                label={fieldsByValue.organization.fields.label}
                                name="organization"
                                type="text"
                                placeholder={fieldsByValue.organization.fields.placeholder}
                                required
                            />
                            <FieldInput
                                label={fieldsByValue.phone.fields.label}
                                name="phone"
                                type="text"
                                placeholder={fieldsByValue.phone.fields.placeholder}
                                required
                            />
                            <FieldSelect label={fieldsByValue.budgetRange.fields.label} name="budgetRange" required>
                                <option value="" disabled>
                                    - Choose one -
                                </option>
                                {budgetOptions &&
                                    budgetOptions.map((option: string) => <option value={option}>{option}</option>)}
                            </FieldSelect>
                            <FieldTextarea
                                label={fieldsByValue.projectDescription.fields.label}
                                name="projectDescription"
                                placeholder={fieldsByValue.projectDescription.fields.placeholder}
                                required
                            />
                            <FieldCheckbox
                                label={fieldsByValue.newsletterSignup.fields.label}
                                name="newsletterSignup"
                            />
                            <div className="flex justify-center my-10">
                                <button type="submit" className="btn-circle btn-circle-ivory" disabled={isSubmitting}>
                                    <span>{isSubmitting ? 'Hang on' : submitButtonText}</span>
                                </button>
                            </div>
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    );
};

export default FormContact;
