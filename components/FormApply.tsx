import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TypeFormFields, TypePage } from '@types';
import { fetcher } from 'api/fetcher';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const FormApply = ({ form }: { form: TypeFormFields }) => {
    const routes = useRouter();
    const { id, intro, fields: formFields, resources } = form;
    console.log({ formFields, resources });
    const { data, error } = useSWR<TypePage[], Error>('/api/careers', fetcher);

    const careerOptions = data?.map((d: TypePage) => ({ label: d.fields.name, value: d.fields.slug }));
    console.log({ routes });
    console.log(routes.query.title || '');

    return (
        <Formik
            enableReinitialize
            initialValues={{ name: '', email: '', phone: '', position: routes.query.title || '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="mb-6">
                        <label className="block mb-2 overline h5" htmlFor="name">
                            Name
                        </label>
                        <Field
                            placeholder="Name"
                            className="w-full px-4 pt-4 pb-3 leading-tight placeholder-steel"
                            type="text"
                            name="name"
                        />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 overline h5" htmlFor="email">
                            Email Address
                        </label>
                        <Field
                            placeholder="Email"
                            className="w-full px-4 pt-4 pb-3 leading-tight placeholder-steel"
                            type="email"
                            name="email"
                        />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 overline h5" htmlFor="phone">
                            Phone Number
                        </label>
                        <Field
                            placeholder="Phone"
                            className="w-full px-4 pt-4 pb-3 leading-tight placeholder-steel"
                            type="text"
                            name="phone"
                        />
                        <ErrorMessage name="phone" component="div" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 overline h5" htmlFor="phone">
                            Position
                        </label>
                        <Field
                            as="select"
                            className="w-full px-4 pt-4 pb-3 leading-tight placeholder-steel"
                            type="text"
                            name="position"
                        >
                            <option value="" disabled>
                                - Choose a position -
                            </option>
                            {careerOptions &&
                                careerOptions.map((o: { label: string; value: string }) => (
                                    <option value={o.value}>{o.label}</option>
                                ))}
                        </Field>
                        <ErrorMessage name="position" component="div" />
                    </div>
                    <button type="submit" className="btn-circle">
                        Submit application
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormApply;
