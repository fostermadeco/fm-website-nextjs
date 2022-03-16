import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { getErrorMessage } from 'lib/errors';
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
                <Form noValidate method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
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
                        <div>
                            <FocusError />
                            <FieldInput
                                label="EMAIL ADDRESS"
                                name="email"
                                type="text"
                                placeholder="Email Address"
                                required
                            />

                            <div className="flex justify-center my-10">
                                <button
                                    type="submit"
                                    className="btn-circle btn-circle-ivory"
                                    disabled={isSubmitting}
                                    aria-label="submit newsletter signup"
                                />
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
            <div className="md:col-span-1 bg-lime p-10">
                <FormCtaNewsletter />
            </div>
        </div>
    );
};

export default CtaNewsletter;
