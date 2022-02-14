import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { TypeFormFields, TypePage } from '@types';
import { fetcher } from 'api/fetcher';
import useSWR from 'swr';
import * as Yup from 'yup';

import { useRouter } from 'next/router';
import { getErrorMessage } from 'lib/errors';
import FieldInput from './FieldInput';
import FieldSelect from './FieldSelect';
import FieldTextarea from './FieldTextarea';

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

const FormApply = ({ form }: { form: TypeFormFields }) => {
    const routes = useRouter();
    const { fields: formFields, resources } = form;
    console.log({ formFields, resources });
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
    console.log({ routes });
    console.log(routes.query.title || '');

    const handleSubmit = async (values: ApplyFormValues, formikHelpers: FormikHelpers<ApplyFormValues>) => {
        const { setSubmitting } = formikHelpers;
        console.log({ formikHelpers });

        // setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        // }, 400);
        // const myForm = document.getElementById('apply') as HTMLFormElement;
        // const formData = new FormData(myForm);
        // console.log(myForm, formData);

        // const formData = new FormData();
        // const formArray: [string, string | File][] = Object.entries({ ...fields, file });
        // formArray.forEach(([key, value]) => {
        //     formData.append(key, value as Blob);
        // });

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // body: new URLSearchParams(formData).toString(),
                body: encode({ 'form-name': 'apply', ...values }),
            });
            setSubmitting(false);
            setHasSuccess(true);
        } catch (e) {
            console.log(e);
            setSubmitError(getErrorMessage(e));
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
                <Form noValidate id="apply" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="apply" />
                    {submitError && <div className="text-poppy">Uh oh</div>}
                    {hasSuccess && <div className="text-lime">Success!</div>}
                    <FieldInput label="/ Name" name="name" type="text" placeholder="Name" required />
                    <FieldInput label="/ Email Address" name="email" type="text" placeholder="Email" required />
                    <FieldInput label="/ Phone Number" name="phone" type="text" placeholder="Phone" required />
                    <FieldSelect label=" / Position" name="position" required>
                        <option value="" disabled>
                            - Choose a position -
                        </option>
                        {careerOptions &&
                            careerOptions.map((o: { label: string; value: string }) => (
                                <option value={o.value}>{o.label}</option>
                            ))}
                    </FieldSelect>
                    <FieldTextarea
                        label="/ Tell us more about yourself."
                        name="aboutYourself"
                        placeholder="Requirements, intentions, target audiences, goals, etc."
                        required
                    />
                    <FieldInput
                        label="Share a link to your online portfolio or any professional profiles."
                        name="websiteLink"
                        type="text"
                        placeholder="https://www.you.com or linkedin.com/in/you"
                    />
                    <div className="flex justify-center my-6">
                        <button type="submit" className="btn-circle btn-circle-ivory" disabled={isSubmitting}>
                            <span>{isSubmitting ? 'Hang on' : 'Submit application'}</span>
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormApply;
