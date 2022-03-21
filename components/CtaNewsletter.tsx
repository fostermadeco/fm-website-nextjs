import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { getErrorMessage } from 'lib/errors';
import { theme } from 'tailwind.config';
import FieldInput from './FieldInput';
import FocusError from './FocusError';

const FormCtaNewsletter = () => {
    const [hasSuccess, setHasSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const successMessage = 'You have successfully signed up to the newsletter';
    const formErrorMessage = 'There was an error signing up to the newsletter';
    interface NewletterormValues {
        email: string;
    }
    const initialValues: NewletterormValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Give us a valid email.').required('Let us know your email.'),
    });

    const encode = (data: { [x: string]: string | number | boolean }) =>
        Object.keys(data)
            .map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&');

    const handleSubmit = async (values: NewletterormValues, formikHelpers: FormikHelpers<NewletterormValues>) => {
        const { setSubmitting } = formikHelpers;
        console.log({ values });

        const body = encode({ 'form-name': 'newsletter', ...values, docs: '' });

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body,
            });
            setSubmitting(false);
            setSubmitError(null);
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
                <Form noValidate method="POST">
                    {/* <input type="hidden" name="form-name" value={id} /> */}
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
                        <div className="flex flex-row">
                            <div className="flex-auto">
                                <FieldInput
                                    label="EMAIL ADDRESS"
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    style={{ backgroundColor: theme.colors.lime }}
                                />
                            </div>
                            {/* <FocusError /> */}
                            <div className="-ml-7 mt-14">
                                <button
                                    className="hover:clickable"
                                    type="submit"
                                    disabled={isSubmitting}
                                    aria-label="submit newsletter signup"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    >
                                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    );
};

const CtaNewsletter = () => {
    const leftSectionMessage =
        'Want to stay in the loop? Sign-up for our quarterly newsletter and we’ll send you updates with a mix of our latest content.';
    return (
        <div className="grid-cols-1 gap-0 mx-0 md:grid md:grid-cols-2">
            <div className="md:col-span-1 bg-darkLime text-center p-20">{leftSectionMessage}</div>
            <div className="md:col-span-1 bg-lime py-14 px-20">
                <FormCtaNewsletter />
            </div>
        </div>
    );
};

export default CtaNewsletter;
