/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { TypeFormFieldFields, TypeFormFields, TypePage } from '@types';
import { fetcher } from 'api/fetcher';
import useSWR from 'swr';
import * as Yup from 'yup';
import * as Contentful from 'contentful';

import { useRouter } from 'next/router';
import { getErrorMessage } from 'lib/errors';
import FieldInput from './FieldInput';
import FieldSelect from './FieldSelect';
import FieldTextarea from './FieldTextarea';
import FocusError from './FocusError';
import TextMarkdown from './TextMarkdown';

interface ApplyFormValues {
    name: string;
    email: string;
    phone: string;
    position: string;
    aboutYourself: string;
    websiteLink: string;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Let us know your name.'),
    email: Yup.string().email('Give us a valid email.').required('Let us know your email.'),
    phone: Yup.string().required('Let us know your phone number.'),
    position: Yup.string().required('Which position you are interested in?'),
    aboutYourself: Yup.string().required('We want to know more!'),
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

const FormApply = ({ form }: { form: TypeFormFields }) => {
    const routes = useRouter();
    const { fields: formFields, formErrorMessage, successMessage, submitButtonText, id, intro } = form;

    console.log({ form });

    const fieldsByValue = groupByValue(formFields);
    const { data } = useSWR<TypePage[], Error>('/api/careers', fetcher);
    const [hasSuccess, setHasSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const careerOptions = data?.map((d: TypePage) => ({ label: d.fields.name, value: d.fields.slug }));
    // could be array
    const positionFromQuery = typeof routes.query.title === 'string' ? routes.query.title : '';
    const initialValues: ApplyFormValues = {
        name: '',
        email: '',
        phone: '',
        position: positionFromQuery,
        aboutYourself: '',
        websiteLink: '',
    };

    const handleSubmit = async (values: ApplyFormValues, formikHelpers: FormikHelpers<ApplyFormValues>) => {
        const { setSubmitting } = formikHelpers;
        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({ 'form-name': 'apply', ...values }),
            });
            setSubmitting(false);
            setSubmitError(null);
            setHasSuccess(true);
        } catch (e) {
            console.log(e);
            setSubmitError(getErrorMessage(e));
            window.scrollTo(0, 0);
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
                                label={fieldsByValue.phone.fields.label}
                                name="phone"
                                type="text"
                                placeholder={fieldsByValue.phone.fields.placeholder}
                                required
                            />
                            <FieldSelect label={fieldsByValue.position.fields.label} name="position" required>
                                <option value="" disabled>
                                    - Choose a position -
                                </option>
                                {careerOptions &&
                                    careerOptions.map((o: { label: string; value: string }) => (
                                        <option value={o.value}>{o.label}</option>
                                    ))}
                            </FieldSelect>
                            <FieldTextarea
                                label={fieldsByValue.aboutYourself.fields.label}
                                name="aboutYourself"
                                placeholder={fieldsByValue.aboutYourself.fields.placeholder}
                                required
                            />
                            <FieldInput
                                label={fieldsByValue.websiteLink.fields.label}
                                name="websiteLink"
                                type="text"
                                placeholder={fieldsByValue.websiteLink.fields.placeholder}
                            />
                            <div className="flex justify-center my-6">
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

export default FormApply;
