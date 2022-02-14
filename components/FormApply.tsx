import React from 'react';
import { Formik, Form } from 'formik';
import { TypeFormFields, TypePage } from '@types';
import { fetcher } from 'api/fetcher';
import useSWR from 'swr';
import * as Yup from 'yup';

import { useRouter } from 'next/router';
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

const FormApply = ({ form }: { form: TypeFormFields }) => {
    const routes = useRouter();
    const { fields: formFields, resources } = form;
    console.log({ formFields, resources });
    const { data } = useSWR<TypePage[], Error>('/api/careers', fetcher);

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

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form noValidate>
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
                        <button type="submit" className="btn-circle btn-circle-ivory">
                            Submit application
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormApply;
